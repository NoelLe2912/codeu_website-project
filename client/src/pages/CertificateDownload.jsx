import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarHomePage from "../components/NavBarHomePage";
import { AppContent } from "../context/AppContext.jsx";
import { useContext } from "react";
import { toast } from "react-toastify";
import { chapters } from "../lecturePageSections/ChapterSelector";
import { chapterOrder } from "../lecturePageSections/lecture-order";
import axios from "axios";
import "./certificatedownload.css";

const loadScript = (src) =>
  new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true") resolve();
      else existing.addEventListener("load", resolve, { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.loaded = "false";
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });

function CertificateDownload() {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, getUserData } =
    useContext(AppContent);
  const [libsReady, setLibsReady] = useState(false);
  const [progressData, setProgressData] = useState({});

  const certName = useMemo(() => {
    if (userData?.name) return userData.name;
    return "Student";
  }, [userData]);

  const certDate = useMemo(() => {
    const today = new Date();
    return `${today.getMonth() + 1} / ${today.getDate()} / ${today.getFullYear()}`;
  }, []);

  const { totalLectures, completedLectures, isEligible } = useMemo(() => {
    const total = chapterOrder.reduce(
      (sum, key) => sum + (chapters[key]?.length || 0),
      0,
    );
    const completed = chapterOrder.reduce((sum, key) => {
      const lectureCount = chapters[key]?.length || 0;
      const list = Array.isArray(progressData?.[key]) ? progressData[key] : [];
      const uniqueValid = new Set(
        list
          .map((index) => Number(index))
          .filter(
            (index) =>
              Number.isInteger(index) &&
              index >= 0 &&
              index < lectureCount,
          ),
      );
      return sum + uniqueValid.size;
    }, 0);
    return {
      totalLectures: total,
      completedLectures: completed,
      isEligible: total > 0 && completed >= total,
    };
  }, [progressData]);

  useEffect(() => {
    if (userData?.lectureProgress?.python) {
      setProgressData(userData.lectureProgress.python);
    }
  }, [userData]);

  useEffect(() => {
    if (!userData) return;
    const fetchProgress = async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/api/user/progress`, {
          withCredentials: true,
        });
        if (data.success) {
          const nextProgress = data.lectureProgress || {};
          setProgressData(nextProgress.python || {});
          setUserData((prev) =>
            prev ? { ...prev, lectureProgress: nextProgress } : prev,
          );
        } else {
          getUserData();
        }
      } catch (error) {
        // silent fail
      }
    };
    fetchProgress();
  }, [backendUrl, userData, setUserData, getUserData]);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",
        );
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
        );
        if (!cancelled) setLibsReady(true);
      } catch (error) {
        if (!cancelled) setLibsReady(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const captureCert = async () => {
    const cert = document.getElementById("certificate");
    if (!cert || !window.html2canvas) return null;
    return await window.html2canvas(cert, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });
  };

  const guardEligibility = () => {
    if (!userData) {
      toast.error("Please log in to download your certificate.");
      return false;
    }
    if (!isEligible) {
      toast.error(
        `Certificate locked: complete all lectures (${completedLectures}/${totalLectures}).`,
      );
      return false;
    }
    return true;
  };

  const downloadPDF = async () => {
    if (!libsReady) {
      toast.error("Preparing download tools. Please try again in a moment.");
      return;
    }
    if (!guardEligibility()) return;
    const canvas = await captureCert();
    if (!canvas || !window.jspdf?.jsPDF) return;
    const imgData = canvas.toDataURL("image/png");
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width / 2, canvas.height / 2],
    });
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width / 2, canvas.height / 2);
    pdf.save("codeu-certificate.pdf");
  };

  const downloadImage = async () => {
    if (!libsReady) {
      toast.error("Preparing download tools. Please try again in a moment.");
      return;
    }
    if (!guardEligibility()) return;
    const canvas = await captureCert();
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "codeu-certificate.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="certificate-page">
      <NavBarHomePage logoSize={40} />

      <div className="certificate-content">
        <h1>CodeU Certificate Generator</h1>

        <div id="certificate">
          <div className="corner-br" />
          <div className="corner-tl" />

          <div className="cert-date" id="certDate">
            {certDate}
          </div>
          <div className="cert-title">Certificate of Completion</div>
          <div className="cert-subtitle">This certifies that</div>
          <div className="cert-name" id="certName">
            {certName}
          </div>
          <div className="cert-body">
            Successfully achieved the requirements of the
            <strong id="certCourse">
              {" "}Introduction to Python Programming Course.
            </strong>
          </div>
          <img
            className="cert-logo"
            src="/codeulogo.png"
            alt="CodeU Logo"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="cert-footer">Awarded by: CodeU Learning Platform</div>
        </div>

        <div className="btn-group">
          <button
            className="btn-pdf"
            type="button"
            onClick={downloadPDF}
          >
            ⬇ Download PDF
          </button>
          <button
            className="btn-img"
            type="button"
            onClick={downloadImage}
          >
            🖼 Download Image
          </button>
        </div>

        <button
          type="button"
          className="cert-back"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default CertificateDownload;
