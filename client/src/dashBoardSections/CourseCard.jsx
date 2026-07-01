import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CourseCard({ name, logo, bgColor, lessonsCompleted, toc, chapterLabels, chapterOrder }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const hasToc = Boolean(toc);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavigateToLecture = (chapterKey, lessonIndex) => {
    navigate(`/lecture?chapter=${chapterKey}&lecture=${lessonIndex}`);
  };

  return (
    <div className="bg-blue-50 rounded-xl p-5 mb-4 transition-all duration-300 hover:bg-blue-100 hover:shadow-lg hover:scale-[1.02]">
      <div
        className={`flex justify-between items-center ${hasToc ? 'cursor-pointer' : ''}`}
        onClick={hasToc ? handleDropdownToggle : undefined}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 flex items-center justify-center ${bgColor} rounded-lg p-2`}>
            <img src={logo} alt={`${name} Logo`} className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-1">{name}</h3>
            <div className="text-sm text-gray-700">{lessonsCompleted}</div>
          </div>
        </div>
        {hasToc && (
          <button 
            className={`transition-all duration-300 hover:translate-x-2 hover:scale-125 ${isDropdownOpen ? 'rotate-180' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              handleDropdownToggle();
            }}
            aria-expanded={isDropdownOpen}
            aria-label={`Toggle ${name} table of contents`}
          >
            ▼
          </button>
        )}
      </div>

      {isDropdownOpen && toc && (
        <div className="mt-4 bg-white rounded-lg p-4 shadow-inner border border-blue-100">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Table of Contents</h4>
          <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
            {(chapterOrder?.filter((key) => toc[key]) || Object.keys(toc)).map(
              (chapterKey, chapterIndex) => {
                const lessons = toc[chapterKey] || [];
                return (
                  <div key={chapterKey}>
                    <div className="text-base font-semibold text-blue-600 mb-2">
                      {`Chapter ${chapterIndex + 1}: ${
                        chapterLabels?.[chapterKey] || chapterKey
                      }`}
                    </div>
                    <ul className="list-none text-base text-gray-800 space-y-2">
                      {lessons.map((lesson, idx) => (
                        <li key={`${chapterKey}-${idx}`}>
                          <button
                            type="button"
                            className="w-full text-left hover:text-blue-600 transition-colors"
                            onClick={() => handleNavigateToLecture(chapterKey, idx)}
                          >
                            <span className="font-semibold">{`Lecture ${idx + 1}: `}</span>
                            {lesson}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              },
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseCard;
