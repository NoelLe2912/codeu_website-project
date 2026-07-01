import { useRef, useState } from "react";
import { Box, VStack, Text } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import LanguageSelector from "../lecturePageSections/LanguageSelector";
import { CODE_SNIPPETS } from "../constants/lecture-constants";
import Output from "../lecturePageSections/Output";
import LectureContent from "../lecturePageSections/LectureContent";

const CodeEditor = ({ chapter = "intro", lecture = "0" }) => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("python");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box w="100%" h="90vh">
      <PanelGroup direction="horizontal">
        {/* Left side - Lecture Content */}
        <Panel defaultSize={50} minSize={20}>
          <Box
            w="100%"
            h="100%"
            bg="white"
            p={4}
            borderRadius={8}
            overflowY="auto"
          >
            <LectureContent chapter={chapter} lecture={lecture} />
          </Box>
        </Panel>

        <PanelResizeHandle
          style={{
            width: "8px",
            backgroundColor: "#1a202c",
            cursor: "col-resize",
            borderLeft: "1px solid #2d3748",
            borderRight: "1px solid #2d3748",
          }}
        />

        {/* Right side - Code Editor and Output */}
        <Panel defaultSize={50} minSize={20}>
          <PanelGroup direction="vertical">
            {/* Top - Language Selector and Code Editor */}
            <Panel defaultSize={65} minSize={20}>
              <VStack spacing={2} w="100%" h="100%">
                <Box w="100%">
                  <LanguageSelector language={language} onSelect={onSelect} />
                </Box>
                <Box w="100%" flex={1}>
                  <Editor
                    options={{
                      minimap: {
                        enabled: false,
                      },
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                    height="100%"
                    theme="vs-dark"
                    language={language}
                    defaultValue={CODE_SNIPPETS[language]}
                    onMount={onMount}
                    value={value}
                    onChange={(value) => setValue(value)}
                  />
                </Box>
              </VStack>
            </Panel>

            <PanelResizeHandle
              style={{
                height: "8px",
                backgroundColor: "#1a202c",
                cursor: "row-resize",
                borderTop: "1px solid #2d3748",
                borderBottom: "1px solid #2d3748",
              }}
            />

            {/* Bottom - Output */}
            <Panel defaultSize={35} minSize={15}>
              <Box w="100%" h="100%">
                <Output editorRef={editorRef} language={language} />
              </Box>
            </Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </Box>
  );
};
export default CodeEditor;
