import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Code,
  Divider,
  List,
  ListItem,
} from "@chakra-ui/react";
import { chapters } from "./ChapterSelector";
import ArithmeticOperators from "./chapter1_content/ArithmeticOperators";
import UnderstandingExpressions from "./chapter1_content/UnderstandingExpressions";
import BuiltInFunctions from "./chapter1_content/BuiltInFunctions";
import StringsWorkingWithText from "./chapter1_content/StringsWorkingWithText";
import UnderstandingDataTypes from "./chapter1_content/UnderstandingDataTypes";
import ProgrammingVsHumanLanguages from "./chapter1_content/ProgrammingVsHumanLanguages";
import ReadyToPractice from "./chapter1_content/ReadyToPractice";
import CreatingVariables from "./chapter2_content/CreatingVariables";
import StateDiagrams from "./chapter2_content/StateDiagrams";
import NamingVariables from "./chapter2_content/NamingVariables";
import ImportingModules from "./chapter2_content/ImportingModules";
import ExpressionsVsStatements from "./chapter2_content/ExpressionsVsStatements";
import DisplayingOutput from "./chapter2_content/DisplayingOutput";
import FunctionArguments from "./chapter2_content/FunctionArguments";
import WritingComments from "./chapter2_content/WritingComments";
import ThreeTypesOfErrors from "./chapter2_content/ThreeTypesOfErrors";
import PracticeExercises from "./chapter2_content/PracticeExercises";
import CreatingYourOwnFunctions from "./chapter3_content/CreatingYourOwnFunctions";
import AddingParameters from "./chapter3_content/AddingParameters";
import FunctionsWorkingTogether from "./chapter3_content/FunctionsWorkingTogether";
import RepeatingWithForLoops from "./chapter3_content/RepeatingWithForLoops";
import VariableScopeLocalVsGlobal from "./chapter3_content/VariableScopeLocalVsGlobal";
import StackDiagrams from "./chapter3_content/StackDiagrams";
import UnderstandingTracebacks from "./chapter3_content/UnderstandingTracebacks";
import PowerOfFunctions from "./chapter3_content/PowerOfFunctions";
import DebuggingFunctions from "./chapter3_content/DebuggingFunctions";
import Chapter3PracticeExercises from "./chapter3_content/PracticeExercises";
import TextBasedDrawing from "./chapter4_content/TextBasedDrawing";
import EncapsulationWrappingCode from "./chapter4_content/EncapsulationWrappingCode";
import GeneralizationAddingParameters from "./chapter4_content/GeneralizationAddingParameters";
import InterfaceDesign from "./chapter4_content/InterfaceDesign";
import BuildingComplexFunctions from "./chapter4_content/BuildingComplexFunctions";
import RefactoringImprovingCode from "./chapter4_content/RefactoringImprovingCode";
import DocumentingWithDocstrings from "./chapter4_content/DocumentingWithDocstrings";
import DevelopmentPlan from "./chapter4_content/DevelopmentPlan";
import PreconditionsAndPostconditions from "./chapter4_content/PreconditionsAndPostconditions";
import Chapter4PracticeExercises from "./chapter4_content/PracticeExercises";
import IntegerDivisionAndModulus from "./chapter5_content/IntegerDivisionAndModulus";
import BooleanExpressions from "./chapter5_content/BooleanExpressions";
import LogicalOperators from "./chapter5_content/LogicalOperators";
import IfStatements from "./chapter5_content/IfStatements";
import NestedConditionals from "./chapter5_content/NestedConditionals";
import RecursionFunctionsCallingThemselves from "./chapter5_content/RecursionFunctionsCallingThemselves";
import UnderstandingRecursiveCalls from "./chapter5_content/UnderstandingRecursiveCalls";
import InfiniteRecursion from "./chapter5_content/InfiniteRecursion";
import GettingInputFromUsers from "./chapter5_content/GettingInputFromUsers";
import Chapter5PracticeExercises from "./chapter5_content/PracticeExercises";
import PracticalExamples from "./chapter5_content/PracticalExamples";
import DebuggingTips from "./chapter5_content/DebuggingTips";
import LoopingThroughStrings from "./chapter7_content/LoopingThroughStrings";
import LetterCheckerFunction from "./chapter7_content/LetterCheckerFunction";
import ReadingWordLists from "./chapter7_content/ReadingWordLists";
import UpdatingVariablesInLoops from "./chapter7_content/UpdatingVariablesInLoops";
import CountingWithLoops from "./chapter7_content/CountingWithLoops";
import SimplifyingWithInOperator from "./chapter7_content/SimplifyingWithInOperator";
import LinearSearchPattern from "./chapter7_content/LinearSearchPattern";
import TestingWithDoctest from "./chapter7_content/TestingWithDoctest";
import BuildingMoreSearchTools from "./chapter7_content/BuildingMoreSearchTools";
import RealWorldSpellingBee from "./chapter7_content/RealWorldSpellingBee";
import Chapter7PracticeExercises from "./chapter7_content/PracticeExercises";
import StringsAreSequences from "./chapter8_content/StringsAreSequences";
import ExtractingStringSlices from "./chapter8_content/ExtractingStringSlices";
import ImmutabilityOfStrings from "./chapter8_content/ImmutabilityOfStrings";
import ComparingStrings from "./chapter8_content/ComparingStrings";
import UsefulStringMethods from "./chapter8_content/UsefulStringMethods";
import ReadingAndWritingFiles from "./chapter8_content/ReadingAndWritingFiles";
import FindingAndReplacingText from "./chapter8_content/FindingAndReplacingText";
import IntroToRegex from "./chapter8_content/IntroToRegex";
import PowerfulRegexPatterns from "./chapter8_content/PowerfulRegexPatterns";
import StringSubstitutionWithRegex from "./chapter8_content/StringSubstitutionWithRegex";
import RealWorldWordle from "./chapter8_content/RealWorldWordle";
import Chapter8PracticeExercises from "./chapter8_content/PracticeExercises";
import ListsAreSequences from "./chapter9_content/ListsAreSequences";
import ListsAreMutable from "./chapter9_content/ListsAreMutable";
import SlicingLists from "./chapter9_content/SlicingLists";
import ListOperations from "./chapter9_content/ListOperations";
import PowerfulListMethods from "./chapter9_content/PowerfulListMethods";
import ConvertingBetweenListsAndStrings from "./chapter9_content/ConvertingBetweenListsAndStrings";
import LoopingThroughLists from "./chapter9_content/LoopingThroughLists";
import SortingLists from "./chapter9_content/SortingLists";
import ObjectsAndValues from "./chapter9_content/ObjectsAndValues";
import AliasingAndReferences from "./chapter9_content/AliasingAndReferences";
import ListsAsFunctionArguments from "./chapter9_content/ListsAsFunctionArguments";
import BuildingAWordList from "./chapter9_content/BuildingAWordList";
import DebuggingListCode from "./chapter9_content/DebuggingListCode";
import Chapter9PracticeExercises from "./chapter9_content/PracticeExercises";
import DictionariesAreMappings from "./chapter10_content/DictionariesAreMappings";
import DifferentWaysToCreateDictionaries from "./chapter10_content/DifferentWaysToCreateDictionaries";
import FastLookupsWithIn from "./chapter10_content/FastLookupsWithIn";
import CollectionOfCounters from "./chapter10_content/CollectionOfCounters";
import LoopingThroughDictionaries from "./chapter10_content/LoopingThroughDictionaries";
import ListsAndDictionariesTogether from "./chapter10_content/ListsAndDictionariesTogether";
import BuildingListsWithAccumulators from "./chapter10_content/BuildingListsWithAccumulators";
import MemoizationCachingResults from "./chapter10_content/MemoizationCachingResults";
import DebuggingLargeDatasets from "./chapter10_content/DebuggingLargeDatasets";
import Chapter10PracticeExercises from "./chapter10_content/PracticeExercises";
import TuplesAreLikeLists from "./chapter11_content/TuplesAreLikeLists";
import TuplesAreImmutable from "./chapter11_content/TuplesAreImmutable";
import TupleAssignment from "./chapter11_content/TupleAssignment";
import TuplesAsReturnValues from "./chapter11_content/TuplesAsReturnValues";
import ArgumentPackingAndUnpacking from "./chapter11_content/ArgumentPackingAndUnpacking";
import PairingElementsWithZip from "./chapter11_content/PairingElementsWithZip";
import ComparingAndSortingTuples from "./chapter11_content/ComparingAndSortingTuples";
import InvertingADictionary from "./chapter11_content/InvertingADictionary";
import DebuggingCompoundDataStructures from "./chapter11_content/DebuggingCompoundDataStructures";
import Chapter11PracticeExercises from "./chapter11_content/PracticeExercises";
import CountingUniqueWords from "./chapter12_content/CountingUniqueWords";
import CleaningTextData from "./chapter12_content/CleaningTextData";
import CountingWordFrequencies from "./chapter12_content/CountingWordFrequencies";
import OptionalParameters from "./chapter12_content/OptionalParameters";
import DictionarySubtraction from "./chapter12_content/DictionarySubtraction";
import MarkovChainAnalysis from "./chapter12_content/MarkovChainAnalysis";
import GeneratingNewText from "./chapter12_content/GeneratingNewText";
import DebuggingComplexPrograms from "./chapter12_content/DebuggingComplexPrograms";
import Chapter12PracticeExercises from "./chapter12_content/PracticeExercises";
import FilenamesAndPaths from "./chapter13_content/FilenamesAndPaths";
import FStringsForFormatting from "./chapter13_content/FStringsForFormatting";
import SerializationSavingData from "./chapter13_content/SerializationSavingData";
import PersistentKeyValueStorage from "./chapter13_content/PersistentKeyValueStorage";
import ShelvesDataStructures from "./chapter13_content/ShelvesDataStructures";
import HashFunctionsAndFileComparison from "./chapter13_content/HashFunctionsAndFileComparison";
import RecursivelySearchingDirectories from "./chapter13_content/RecursivelySearchingDirectories";
import EphemeralVsPersistentPrograms from "./chapter13_content/EphemeralVsPersistentPrograms";
import DebuggingFileOperations from "./chapter13_content/DebuggingFileOperations";
import Chapter13PracticeExercises from "./chapter13_content/PracticeExercises";
import ProgrammerDefinedTypes from "./chapter14_content/ProgrammerDefinedTypes";
import AttributesObjectVariables from "./chapter14_content/AttributesObjectVariables";
import ObjectsAsReturnValues from "./chapter14_content/ObjectsAsReturnValues";
import ObjectsAreMutable from "./chapter14_content/ObjectsAreMutable";
import CopyingObjects from "./chapter14_content/CopyingObjects";
import PureFunctions from "./chapter14_content/PureFunctions";
import PrototypeAndPatchDevelopment from "./chapter14_content/PrototypeAndPatchDevelopment";
import DesignFirstDevelopment from "./chapter14_content/DesignFirstDevelopment";
import DebuggingWithObjects from "./chapter14_content/DebuggingWithObjects";
import Chapter14PracticeExercises from "./chapter14_content/PracticeExercises";
import FunctionsReturnValues from "./chapter6_content/FunctionsReturnValues";
import FunctionsThatReturnNone from "./chapter6_content/FunctionsThatReturnNone";
import ReturnValuesAndConditionals from "./chapter6_content/ReturnValuesAndConditionals";
import IncrementalDevelopment from "./chapter6_content/IncrementalDevelopment";
import BooleanFunctions from "./chapter6_content/BooleanFunctions";
import RecursionWithReturnValues from "./chapter6_content/RecursionWithReturnValues";
import LeapOfFaith from "./chapter6_content/LeapOfFaith";
import FibonacciNumbers from "./chapter6_content/FibonacciNumbers";
import InputValidation from "./chapter6_content/InputValidation";
import DebuggingReturnValues from "./chapter6_content/DebuggingReturnValues";
import Chapter6PracticeExercises from "./chapter6_content/PracticeExercises";
import DefiningMethods from "./chapter15_content/DefiningMethods";
import ConvertingFunctionsToMethods from "./chapter15_content/ConvertingFunctionsToMethods";
import StaticMethods from "./chapter15_content/StaticMethods";
import ComparingTimeObjects from "./chapter15_content/ComparingTimeObjects";
import SpecialMethodsStr from "./chapter15_content/SpecialMethodsStr";
import InitMethod from "./chapter15_content/InitMethod";
import OperatorOverloading from "./chapter15_content/OperatorOverloading";
import DebuggingInvariants from "./chapter15_content/DebuggingInvariants";
import Chapter15PracticeExercises from "./chapter15_content/PracticeExercises";
import RepresentingPlayingCards from "./chapter17_content/RepresentingPlayingCards";
import CardStringRepresentation from "./chapter17_content/CardStringRepresentation";
import ComparingCards from "./chapter17_content/ComparingCards";
import CreatingADeck from "./chapter17_content/CreatingADeck";
import InheritanceParentsAndChildren from "./chapter17_content/InheritanceParentsAndChildren";
import Polymorphism from "./chapter17_content/Polymorphism";
import Specialization from "./chapter17_content/Specialization";
import LiskovSubstitutionPrinciple from "./chapter17_content/LiskovSubstitutionPrinciple";
import DebuggingInheritance from "./chapter17_content/DebuggingInheritance";
import Chapter17PracticeExercises from "./chapter17_content/PracticeExercises";
import CreatingAPoint from "./chapter16_content/CreatingAPoint";
import CreatingALine from "./chapter16_content/CreatingALine";
import EquivalenceAndIdentity from "./chapter16_content/EquivalenceAndIdentity";
import RectanglesDeepCopyProblem from "./chapter16_content/RectanglesDeepCopyProblem";
import Chapter16Polymorphism from "./chapter16_content/Polymorphism";
import DebuggingAndGlossary from "./chapter16_content/DebuggingAndGlossary";
import Chapter16PracticeExercises from "./chapter16_content/PracticeExercises";
import Chapter18DefiningMethods from "./chapter18_content/DefiningMethods";
import Chapter18ConvertingFunctionsToMethods from "./chapter18_content/ConvertingFunctionsToMethods";
import Chapter18StaticMethods from "./chapter18_content/StaticMethods";
import Chapter18ComparingTimeObjects from "./chapter18_content/ComparingTimeObjects";
import Chapter18SpecialMethodsStr from "./chapter18_content/SpecialMethodsStr";
import Chapter18InitMethod from "./chapter18_content/InitMethod";
import Chapter18OperatorOverloading from "./chapter18_content/OperatorOverloading";
import Chapter18DebuggingInvariants from "./chapter18_content/DebuggingInvariants";
import Chapter18PracticeExercises from "./chapter18_content/PracticeExercises";

// Lecture content database
const lectureContent = {
  intro: {
    0: {
      title: "What is Python?",
      description: "Learn the basics of Python programming language",
      content: (
        <VStack spacing={6} align="start">
          {/* Overview Section */}
          <Box>
            <Heading as="h3" size="md" color="blue.600" mb={3}>
              📚 What is Python?
            </Heading>
            <Text color="gray.700" lineHeight="1.8">
              Python is a high-level, interpreted programming language known for
              its simplicity and readability. Created by Guido van Rossum in
              1991, Python emphasizes code readability and allows programmers to
              express concepts in fewer lines of code than would be possible in
              languages such as C++ or Java.
            </Text>
          </Box>

          {/* Key Features */}
          <Box w="100%">
            <Heading as="h3" size="md" color="blue.600" mb={3}>
              ✨ Key Features
            </Heading>
            <List spacing={2}>
              <ListItem>
                <HStack>
                  <Text color="green.500" fontSize="lg">
                    ✓
                  </Text>
                  <Text color="gray.700">
                    <strong>Simple and Readable:</strong> Python uses
                    English-like syntax that's easy to understand
                  </Text>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <Text color="green.500" fontSize="lg">
                    ✓
                  </Text>
                  <Text color="gray.700">
                    <strong>Interpreted Language:</strong> No need to compile;
                    code runs directly
                  </Text>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <Text color="green.500" fontSize="lg">
                    ✓
                  </Text>
                  <Text color="gray.700">
                    <strong>Versatile:</strong> Used for web development, data
                    science, AI, automation, and more
                  </Text>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <Text color="green.500" fontSize="lg">
                    ✓
                  </Text>
                  <Text color="gray.700">
                    <strong>Large Community:</strong> Extensive libraries and
                    frameworks available
                  </Text>
                </HStack>
              </ListItem>
            </List>
          </Box>

          <Divider />

          {/* Assignment Section */}
          <Box
            w="100%"
            bg="blue.50"
            p={5}
            rounded="lg"
            borderLeft="4px solid"
            borderLeftColor="blue.500"
          >
            <HStack mb={4}>
              <Badge colorScheme="blue" fontSize="sm" px={3} py={1}>
                ASSIGNMENT
              </Badge>
              <Heading as="h3" size="sm" color="blue.700">
                Problem 1: Your First Output
              </Heading>
            </HStack>

            <VStack align="start" spacing={3}>
              <Box>
                <Heading as="h4" size="sm" color="gray.700" mb={2}>
                  📝 Problem Description
                </Heading>
                <Text color="gray.700" fontSize="sm" lineHeight="1.7">
                  Write a Python program that prints "Hello, Python!" to the
                  console. This is the classic first program that introduces you
                  to Python's basic output functionality.
                </Text>
              </Box>

              <Box>
                <Heading as="h4" size="sm" color="gray.700" mb={2}>
                  ✅ Expected Output
                </Heading>
                <Code
                  display="block"
                  bg="gray.800"
                  color="green.300"
                  p={3}
                  rounded="md"
                  whiteSpace="pre"
                  fontSize="sm"
                >
                  Hello, Python!
                </Code>
              </Box>

              <Box>
                <Heading as="h4" size="sm" color="gray.700" mb={2}>
                  💡 Hint
                </Heading>
                <Text color="gray.700" fontSize="sm">
                  Use the{" "}
                  <Code bg="gray.900" px={2} py={1}>
                    print()
                  </Code>{" "}
                  function to display text. The text should be enclosed in
                  quotes (either single or double).
                </Text>
              </Box>

              <Box>
                <Heading as="h4" size="sm" color="gray.700" mb={2}>
                  🔍 Why This Works
                </Heading>
                <Text color="gray.700" fontSize="sm" lineHeight="1.7" mb={2}>
                  The <Code bg="gray.900">print()</Code> function sends whatever
                  is inside the parentheses to the console, so wrapping the text
                  in quotes tells Python to treat it as a string rather than a
                  command.
                </Text>
                <Code
                  display="block"
                  bg="gray.900"
                  color="green.200"
                  p={3}
                  rounded="md"
                  whiteSpace="pre"
                  fontSize="sm"
                >
                  print("Hello, Python!")
                </Code>
              </Box>

              <Box
                w="100%"
                bg="white"
                p={4}
                rounded="md"
                border="1px solid"
                borderColor="gray.200"
              >
                <Heading as="h4" size="sm" color="gray.700" mb={3}>
                  🛠 Fix It Fast
                </Heading>
                <Text color="gray.700" fontSize="sm" mb={2}>
                  If you see an error, it usually means the text is not wrapped
                  in quotes.
                </Text>
                <VStack align="start" spacing={2} w="100%">
                  <Box w="100%">
                    <Badge colorScheme="red" mb={1}>
                      ❌ Incorrect
                    </Badge>
                    <Code
                      display="block"
                      bg="gray.900"
                      color="red.200"
                      p={3}
                      rounded="md"
                      whiteSpace="pre"
                      fontSize="sm"
                    >
                      print(Hello, Python!)
                    </Code>
                  </Box>
                  <Box w="100%">
                    <Badge colorScheme="green" mb={1}>
                      ✅ Correct
                    </Badge>
                    <Code
                      display="block"
                      bg="gray.900"
                      color="green.200"
                      p={3}
                      rounded="md"
                      whiteSpace="pre"
                      fontSize="sm"
                    >
                      print("Hello, Python!")
                    </Code>
                  </Box>
                </VStack>
              </Box>

              <Box>
                <Heading as="h4" size="sm" color="gray.700" mb={2}>
                  🎯 Learning Objectives
                </Heading>
                <List spacing={1} fontSize="sm">
                  <ListItem>
                    <HStack>
                      <Box as="span" color="blue.500">
                        →
                      </Box>
                      <Text color="gray.700">
                        Understand how to use the print() function
                      </Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack>
                      <Box as="span" color="blue.500">
                        →
                      </Box>
                      <Text color="gray.700">Practice basic Python syntax</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack>
                      <Box as="span" color="blue.500">
                        →
                      </Box>
                      <Text color="gray.700">
                        Run and verify your first Python program
                      </Text>
                    </HStack>
                  </ListItem>
                </List>
              </Box>
            </VStack>
          </Box>
        </VStack>
      ),
    },
  },
  chapter1: {
    0: {
      title: "Working with Numbers: Arithmetic Operators",
      description: "Learn how Python performs calculations with operators.",
      content: <ArithmeticOperators />,
    },
    1: {
      title: "Understanding Expressions",
      description: "Learn how Python evaluates expressions and order rules.",
      content: <UnderstandingExpressions />,
    },
    2: {
      title: "Python's Built-in Functions",
      description: "Use built-in functions like round() and abs().",
      content: <BuiltInFunctions />,
    },
    3: {
      title: "Strings: Working with Text",
      description: "Create and manipulate strings in Python.",
      content: <StringsWorkingWithText />,
    },
    4: {
      title: "Understanding Data Types",
      description: "Understand int, float, and str types and conversions.",
      content: <UnderstandingDataTypes />,
    },
    5: {
      title: "Programming Languages vs Human Languages",
      description: "See how programming languages differ from natural ones.",
      content: <ProgrammingVsHumanLanguages />,
    },
    6: {
      title: "Ready to Practice?",
      description: "Practice exercises to reinforce Chapter 1 concepts.",
      content: <ReadyToPractice />,
    },
  },
  chapter2: {
    0: {
      title: "Creating Variables",
      description: "Learn how to store values using variables.",
      content: <CreatingVariables />,
    },
    1: {
      title: "Visualizing Variables: State Diagrams",
      description: "See how variables and values relate in memory.",
      content: <StateDiagrams />,
    },
    2: {
      title: "Naming Your Variables",
      description: "Choose clear, valid, and readable variable names.",
      content: <NamingVariables />,
    },
    3: {
      title: "Importing Modules",
      description: "Use Python modules to extend functionality.",
      content: <ImportingModules />,
    },
    4: {
      title: "Expressions vs Statements",
      description: "Understand the difference between expressions and statements.",
      content: <ExpressionsVsStatements />,
    },
    5: {
      title: "Displaying Output with print",
      description: "Use print() to display values and messages.",
      content: <DisplayingOutput />,
    },
    6: {
      title: "Understanding Function Arguments",
      description: "Learn how functions accept and use arguments.",
      content: <FunctionArguments />,
    },
    7: {
      title: "Writing Comments",
      description: "Document code clearly with comments.",
      content: <WritingComments />,
    },
    8: {
      title: "Three Types of Errors",
      description: "Identify syntax, runtime, and logic errors.",
      content: <ThreeTypesOfErrors />,
    },
    9: {
      title: "Practice Exercises",
      description: "Apply Chapter 2 concepts with exercises.",
      content: <PracticeExercises />,
    },
  },
  chapter3: {
    0: {
      title: "Creating Your Own Functions",
      description: "Learn how to define and use your own functions.",
      content: <CreatingYourOwnFunctions />,
    },
    1: {
      title: "Adding Parameters",
      description: "Pass data into functions with parameters.",
      content: <AddingParameters />,
    },
    2: {
      title: "Functions Working Together",
      description: "Combine functions to solve bigger problems.",
      content: <FunctionsWorkingTogether />,
    },
    3: {
      title: "Repeating with For Loops",
      description: "Use loops to repeat function logic.",
      content: <RepeatingWithForLoops />,
    },
    4: {
      title: "Variable Scope: Local vs Global",
      description: "Understand where variables are accessible.",
      content: <VariableScopeLocalVsGlobal />,
    },
    5: {
      title: "Visualizing Function Calls: Stack Diagrams",
      description: "Trace function execution with stack diagrams.",
      content: <StackDiagrams />,
    },
    6: {
      title: "Understanding Tracebacks",
      description: "Learn to read and interpret Python tracebacks.",
      content: <UnderstandingTracebacks />,
    },
    7: {
      title: "The Power of Functions",
      description: "See how functions simplify complex tasks.",
      content: <PowerOfFunctions />,
    },
    8: {
      title: "Debugging Functions",
      description: "Find and fix common function bugs.",
      content: <DebuggingFunctions />,
    },
    9: {
      title: "Practice Exercises",
      description: "Apply Chapter 3 concepts with exercises.",
      content: <Chapter3PracticeExercises />,
    },
  },
  chapter4: {
    0: {
      title: "Text-Based Drawing",
      description: "Create drawings using text and basic functions.",
      content: <TextBasedDrawing />,
    },
    1: {
      title: "Encapsulation: Wrapping Code in Functions",
      description: "Organize code by wrapping it into functions.",
      content: <EncapsulationWrappingCode />,
    },
    2: {
      title: "Generalization: Adding Parameters",
      description: "Make functions flexible by adding parameters.",
      content: <GeneralizationAddingParameters />,
    },
    3: {
      title: "Interface Design",
      description: "Design clear function interfaces for reuse.",
      content: <InterfaceDesign />,
    },
    4: {
      title: "Building Complex Functions from Simple Ones",
      description: "Compose simple functions to build complex behavior.",
      content: <BuildingComplexFunctions />,
    },
    5: {
      title: "Refactoring: Improving Your Code",
      description: "Improve structure and readability without changing behavior.",
      content: <RefactoringImprovingCode />,
    },
    6: {
      title: "Documenting with Docstrings",
      description: "Document functions using docstrings.",
      content: <DocumentingWithDocstrings />,
    },
    7: {
      title: "A Development Plan",
      description: "Follow a plan to build and test programs.",
      content: <DevelopmentPlan />,
    },
    8: {
      title: "Preconditions and Postconditions",
      description: "Define assumptions and guarantees for functions.",
      content: <PreconditionsAndPostconditions />,
    },
    9: {
      title: "Practice Exercises",
      description: "Apply Chapter 4 concepts with exercises.",
      content: <Chapter4PracticeExercises />,
    },
  },
  chapter5: {
    0: {
      title: "Integer Division and Modulus",
      description: "Learn integer division and modulus for remainders.",
      content: <IntegerDivisionAndModulus />,
    },
    1: {
      title: "Boolean Expressions",
      description: "Evaluate conditions that are true or false.",
      content: <BooleanExpressions />,
    },
    2: {
      title: "Logical Operators",
      description: "Combine conditions with and, or, and not.",
      content: <LogicalOperators />,
    },
    3: {
      title: "If Statements",
      description: "Control program flow with if statements.",
      content: <IfStatements />,
    },
    4: {
      title: "Nested Conditionals",
      description: "Use if statements inside other conditions.",
      content: <NestedConditionals />,
    },
    5: {
      title: "Recursion: Functions Calling Themselves",
      description: "Understand how functions can call themselves.",
      content: <RecursionFunctionsCallingThemselves />,
    },
    6: {
      title: "Understanding Recursive Calls",
      description: "Trace recursive calls and base cases.",
      content: <UnderstandingRecursiveCalls />,
    },
    7: {
      title: "Infinite Recursion",
      description: "See what happens when recursion never ends.",
      content: <InfiniteRecursion />,
    },
    8: {
      title: "Getting Input from Users",
      description: "Collect user input during program execution.",
      content: <GettingInputFromUsers />,
    },
    9: {
      title: "Practice Exercises",
      description: "Apply Chapter 5 concepts with exercises.",
      content: <Chapter5PracticeExercises />,
    },
    10: {
      title: "Practical Examples",
      description: "See conditional logic in real examples.",
      content: <PracticalExamples />,
    },
    11: {
      title: "Debugging Tips",
      description: "Common debugging techniques for conditionals and recursion.",
      content: <DebuggingTips />,
    },
  },
  chapter7: {
    0: {
      title: "Looping Through Strings",
      description: "Use for loops to process each character in a string.",
      content: <LoopingThroughStrings />,
    },
    1: {
      title: "Creating a Letter Checker Function",
      description: "Build a function that checks for letters in words.",
      content: <LetterCheckerFunction />,
    },
    2: {
      title: "Reading Word Lists from Files",
      description: "Load words from files for text processing tasks.",
      content: <ReadingWordLists />,
    },
    3: {
      title: "Updating Variables in Loops",
      description: "Use loop variables and accumulators correctly.",
      content: <UpdatingVariablesInLoops />,
    },
    4: {
      title: "Counting with Loops",
      description: "Count items and track totals with loops.",
      content: <CountingWithLoops />,
    },
    5: {
      title: "Simplifying with the in Operator",
      description: "Use the in operator to simplify search logic.",
      content: <SimplifyingWithInOperator />,
    },
    6: {
      title: "The Linear Search Pattern",
      description: "Understand and apply linear search patterns.",
      content: <LinearSearchPattern />,
    },
    7: {
      title: "Testing with Doctest",
      description: "Use doctest to test your functions.",
      content: <TestingWithDoctest />,
    },
    8: {
      title: "Building More Search Tools",
      description: "Create more advanced search functions.",
      content: <BuildingMoreSearchTools />,
    },
    9: {
      title: "Real-World Application: Spelling Bee",
      description: "Apply search patterns to a spelling bee app.",
      content: <RealWorldSpellingBee />,
    },
    10: {
      title: "Practice Exercises",
      description: "Apply Chapter 7 concepts with exercises.",
      content: <Chapter7PracticeExercises />,
    },
  },
  chapter8: {
    0: {
      title: "Strings Are Sequences",
      description: "Treat strings as sequences and iterate through them.",
      content: <StringsAreSequences />,
    },
    1: {
      title: "Extracting String Slices",
      description: "Slice strings to extract substrings.",
      content: <ExtractingStringSlices />,
    },
    2: {
      title: "Immutability of Strings",
      description: "Learn why strings can't be changed in place.",
      content: <ImmutabilityOfStrings />,
    },
    3: {
      title: "Comparing Strings",
      description: "Compare strings lexicographically.",
      content: <ComparingStrings />,
    },
    4: {
      title: "Useful String Methods",
      description: "Use built-in string methods effectively.",
      content: <UsefulStringMethods />,
    },
    5: {
      title: "Reading and Writing Files",
      description: "Read text files and write output files.",
      content: <ReadingAndWritingFiles />,
    },
    6: {
      title: "Finding and Replacing Text",
      description: "Search and replace text within strings.",
      content: <FindingAndReplacingText />,
    },
    7: {
      title: "Introduction to Regular Expressions",
      description: "Learn regex basics for pattern matching.",
      content: <IntroToRegex />,
    },
    8: {
      title: "Powerful Regex Patterns",
      description: "Use advanced regex patterns.",
      content: <PowerfulRegexPatterns />,
    },
    9: {
      title: "String Substitution with Regex",
      description: "Replace text using regex substitutions.",
      content: <StringSubstitutionWithRegex />,
    },
    10: {
      title: "Real-World Application: Wordle",
      description: "Apply string processing to a Wordle-style task.",
      content: <RealWorldWordle />,
    },
    11: {
      title: "Practice Exercises",
      description: "Apply Chapter 8 concepts with exercises.",
      content: <Chapter8PracticeExercises />,
    },
  },
  chapter9: {
    0: {
      title: "Lists Are Sequences",
      description: "Understand lists as ordered sequences.",
      content: <ListsAreSequences />,
    },
    1: {
      title: "Lists Are Mutable",
      description: "Learn how lists can be changed in place.",
      content: <ListsAreMutable />,
    },
    2: {
      title: "Slicing Lists",
      description: "Slice lists to get sublists.",
      content: <SlicingLists />,
    },
    3: {
      title: "List Operations",
      description: "Use list operators like + and *.",
      content: <ListOperations />,
    },
    4: {
      title: "Powerful List Methods",
      description: "Use built-in methods to modify lists.",
      content: <PowerfulListMethods />,
    },
    5: {
      title: "Converting Between Lists and Strings",
      description: "Convert between strings and lists effectively.",
      content: <ConvertingBetweenListsAndStrings />,
    },
    6: {
      title: "Looping Through Lists",
      description: "Iterate through list items in different ways.",
      content: <LoopingThroughLists />,
    },
    7: {
      title: "Sorting Lists",
      description: "Sort lists and understand sort behavior.",
      content: <SortingLists />,
    },
    8: {
      title: "Objects and Values",
      description: "Understand how lists store object references.",
      content: <ObjectsAndValues />,
    },
    9: {
      title: "Aliasing and References",
      description: "See how multiple variables can reference the same list.",
      content: <AliasingAndReferences />,
    },
    10: {
      title: "Lists as Function Arguments",
      description: "Pass lists into functions and see side effects.",
      content: <ListsAsFunctionArguments />,
    },
    11: {
      title: "Building a Word List",
      description: "Build and search a word list.",
      content: <BuildingAWordList />,
    },
    12: {
      title: "Debugging List Code",
      description: "Find and fix common list bugs.",
      content: <DebuggingListCode />,
    },
    13: {
      title: "Practice Exercises",
      description: "Apply Chapter 9 concepts with exercises.",
      content: <Chapter9PracticeExercises />,
    },
  },
  chapter10: {
    0: {
      title: "Dictionaries Are Mappings",
      description: "Understand dictionaries as key-value mappings.",
      content: <DictionariesAreMappings />,
    },
    1: {
      title: "Different Ways to Create Dictionaries",
      description: "Create dictionaries in multiple ways.",
      content: <DifferentWaysToCreateDictionaries />,
    },
    2: {
      title: "Fast Lookups with in",
      description: "Use the in operator for efficient lookups.",
      content: <FastLookupsWithIn />,
    },
    3: {
      title: "A Collection of Counters",
      description: "Count items using dictionary accumulators.",
      content: <CollectionOfCounters />,
    },
    4: {
      title: "Looping Through Dictionaries",
      description: "Iterate over dictionary keys, values, and items.",
      content: <LoopingThroughDictionaries />,
    },
    5: {
      title: "Lists and Dictionaries Together",
      description: "Combine lists and dictionaries effectively.",
      content: <ListsAndDictionariesTogether />,
    },
    6: {
      title: "Building Lists with Accumulators",
      description: "Build lists by accumulating values in loops.",
      content: <BuildingListsWithAccumulators />,
    },
    7: {
      title: "Memoization: Caching Results",
      description: "Speed up functions with memoization.",
      content: <MemoizationCachingResults />,
    },
    8: {
      title: "Debugging Large Datasets",
      description: "Debug large dictionary structures effectively.",
      content: <DebuggingLargeDatasets />,
    },
    9: {
      title: "Practice Exercises",
      description: "Apply Chapter 10 concepts with exercises.",
      content: <Chapter10PracticeExercises />,
    },
  },
  chapter11: {
    0: {
      title: "Tuples Are Like Lists",
      description: "Learn how tuples are similar to lists.",
      content: <TuplesAreLikeLists />,
    },
    1: {
      title: "But Tuples Are Immutable",
      description: "Understand why tuples cannot be changed.",
      content: <TuplesAreImmutable />,
    },
    2: {
      title: "Tuple Assignment",
      description: "Assign multiple variables using tuples.",
      content: <TupleAssignment />,
    },
    3: {
      title: "Tuples as Return Values",
      description: "Return multiple values from functions with tuples.",
      content: <TuplesAsReturnValues />,
    },
    4: {
      title: "Argument Packing and Unpacking",
      description: "Use *args and tuple unpacking.",
      content: <ArgumentPackingAndUnpacking />,
    },
    5: {
      title: "Pairing Elements with zip()",
      description: "Combine sequences using zip().",
      content: <PairingElementsWithZip />,
    },
    6: {
      title: "Comparing and Sorting Tuples",
      description: "Compare tuples and sort by tuple values.",
      content: <ComparingAndSortingTuples />,
    },
    7: {
      title: "Inverting a Dictionary",
      description: "Invert dictionary keys and values with tuples.",
      content: <InvertingADictionary />,
    },
    8: {
      title: "Debugging Compound Data Structures",
      description: "Debug nested structures effectively.",
      content: <DebuggingCompoundDataStructures />,
    },
    9: {
      title: "Practice Exercises",
      description: "Apply Chapter 11 concepts with exercises.",
      content: <Chapter11PracticeExercises />,
    },
  },
  chapter12: {
    0: {
      title: "Counting Unique Words",
      description: "Count distinct words in a text.",
      content: <CountingUniqueWords />,
    },
    1: {
      title: "Cleaning Text Data",
      description: "Normalize and clean raw text input.",
      content: <CleaningTextData />,
    },
    2: {
      title: "Counting Word Frequencies",
      description: "Build frequency dictionaries for text.",
      content: <CountingWordFrequencies />,
    },
    3: {
      title: "Functions with Optional Parameters",
      description: "Use default arguments for flexible functions.",
      content: <OptionalParameters />,
    },
    4: {
      title: "Dictionary Subtraction",
      description: "Subtract dictionary counts effectively.",
      content: <DictionarySubtraction />,
    },
    5: {
      title: "Analyzing Word Pairs (Bigrams)",
      description: "Use Markov chains to analyze word pairs.",
      content: <MarkovChainAnalysis />,
    },
    6: {
      title: "Generating New Text",
      description: "Generate new text from word frequency models.",
      content: <GeneratingNewText />,
    },
    7: {
      title: "Debugging Complex Programs",
      description: "Debug multi-step text analysis pipelines.",
      content: <DebuggingComplexPrograms />,
    },
    8: {
      title: "Practice Exercises",
      description: "Apply Chapter 12 concepts with exercises.",
      content: <Chapter12PracticeExercises />,
    },
  },
  chapter13: {
    0: {
      title: "Filenames and Paths",
      description: "Work with file paths and filenames safely.",
      content: <FilenamesAndPaths />,
    },
    1: {
      title: "F-Strings for Formatting",
      description: "Format strings with f-strings.",
      content: <FStringsForFormatting />,
    },
    2: {
      title: "Serialization: Saving Data Structures",
      description: "Serialize data for storage and transfer.",
      content: <SerializationSavingData />,
    },
    3: {
      title: "Databases: Persistent Key-Value Storage",
      description: "Persist data using key-value storage.",
      content: <PersistentKeyValueStorage />,
    },
    4: {
      title: "Storing Data Structures in Shelves",
      description: "Store Python objects using shelves.",
      content: <ShelvesDataStructures />,
    },
    5: {
      title: "Hash Functions and File Comparison",
      description: "Compare files using hashing techniques.",
      content: <HashFunctionsAndFileComparison />,
    },
    6: {
      title: "Recursively Searching Directories",
      description: "Search directories recursively.",
      content: <RecursivelySearchingDirectories />,
    },
    7: {
      title: "Ephemeral vs Persistent Programs",
      description: "Understand program lifetime and data persistence.",
      content: <EphemeralVsPersistentPrograms />,
    },
    8: {
      title: "Debugging File Operations",
      description: "Debug file I/O and storage bugs.",
      content: <DebuggingFileOperations />,
    },
    9: {
      title: "Practice Exercises",
      description: "Apply Chapter 13 concepts with exercises.",
      content: <Chapter13PracticeExercises />,
    },
  },
  chapter14: {
    0: {
      title: "Programmer-Defined Types",
      description: "Create your own types with classes.",
      content: <ProgrammerDefinedTypes />,
    },
    1: {
      title: "Attributes: Object Variables",
      description: "Use attributes to store object data.",
      content: <AttributesObjectVariables />,
    },
    2: {
      title: "Objects as Return Values",
      description: "Return objects from functions.",
      content: <ObjectsAsReturnValues />,
    },
    3: {
      title: "Objects Are Mutable",
      description: "Understand mutability and side effects.",
      content: <ObjectsAreMutable />,
    },
    4: {
      title: "Copying Objects",
      description: "Copy objects safely and correctly.",
      content: <CopyingObjects />,
    },
    5: {
      title: "Pure Functions",
      description: "Write functions without side effects.",
      content: <PureFunctions />,
    },
    6: {
      title: "Prototype and Patch Development",
      description: "Iterate by prototyping and patching.",
      content: <PrototypeAndPatchDevelopment />,
    },
    7: {
      title: "Design-First Development",
      description: "Design before coding for complex tasks.",
      content: <DesignFirstDevelopment />,
    },
    8: {
      title: "Debugging with Objects",
      description: "Debug programs that use objects.",
      content: <DebuggingWithObjects />,
    },
    9: {
      title: "Practice Exercises",
      description: "Apply Chapter 14 concepts with exercises.",
      content: <Chapter14PracticeExercises />,
    },
  },
  chapter6: {
    0: {
      title: "Functions Return Values",
      description: "Return results from functions.",
      content: <FunctionsReturnValues />,
    },
    1: {
      title: "Functions That Return None",
      description: "Understand functions without return values.",
      content: <FunctionsThatReturnNone />,
    },
    2: {
      title: "Return Values and Conditionals",
      description: "Return values based on conditional logic.",
      content: <ReturnValuesAndConditionals />,
    },
    3: {
      title: "Incremental Development",
      description: "Build functions step by step.",
      content: <IncrementalDevelopment />,
    },
    4: {
      title: "Boolean Functions",
      description: "Write functions that return True/False.",
      content: <BooleanFunctions />,
    },
    5: {
      title: "Recursion with Return Values",
      description: "Use recursion to return computed values.",
      content: <RecursionWithReturnValues />,
    },
    6: {
      title: "The Leap of Faith",
      description: "Understand recursive thinking.",
      content: <LeapOfFaith />,
    },
    7: {
      title: "Fibonacci Numbers",
      description: "Compute Fibonacci numbers recursively.",
      content: <FibonacciNumbers />,
    },
    8: {
      title: "Input Validation",
      description: "Validate input to prevent errors.",
      content: <InputValidation />,
    },
    9: {
      title: "Debugging Return Values",
      description: "Debug issues in return logic.",
      content: <DebuggingReturnValues />,
    },
    10: {
      title: "Practice Exercises",
      description: "Apply Chapter 6 concepts with exercises.",
      content: <Chapter6PracticeExercises />,
    },
  },
  chapter15: {
    0: {
      title: "Defining Methods",
      description: "Define methods on classes for behavior.",
      content: <DefiningMethods />,
    },
    1: {
      title: "Converting Functions to Methods",
      description: "Move functions into classes as methods.",
      content: <ConvertingFunctionsToMethods />,
    },
    2: {
      title: "Static Methods",
      description: "Use static methods when no instance is needed.",
      content: <StaticMethods />,
    },
    3: {
      title: "Comparing Time Objects",
      description: "Compare Time objects effectively.",
      content: <ComparingTimeObjects />,
    },
    4: {
      title: "Special Methods: __str__",
      description: "Customize string output with __str__.",
      content: <SpecialMethodsStr />,
    },
    5: {
      title: "The __init__ Method",
      description: "Initialize objects with __init__.",
      content: <InitMethod />,
    },
    6: {
      title: "Operator Overloading",
      description: "Define behavior for operators on objects.",
      content: <OperatorOverloading />,
    },
    7: {
      title: "Debugging: Invariants",
      description: "Use invariants to debug object state.",
      content: <DebuggingInvariants />,
    },
    8: {
      title: "Practice Exercises",
      description: "Apply Chapter 15 concepts with exercises.",
      content: <Chapter15PracticeExercises />,
    },
  },
  chapter17: {
    0: {
      title: "Representing Playing Cards",
      description: "Model playing cards with classes.",
      content: <RepresentingPlayingCards />,
    },
    1: {
      title: "Card String Representation",
      description: "Create readable card string output.",
      content: <CardStringRepresentation />,
    },
    2: {
      title: "Comparing Cards",
      description: "Compare cards using ranks and suits.",
      content: <ComparingCards />,
    },
    3: {
      title: "Creating a Deck",
      description: "Build a deck and add utility methods.",
      content: <CreatingADeck />,
    },
    4: {
      title: "Inheritance: Parents and Children",
      description: "Use inheritance to extend behavior.",
      content: <InheritanceParentsAndChildren />,
    },
    5: {
      title: "Polymorphism",
      description: "Use polymorphism to write flexible code.",
      content: <Polymorphism />,
    },
    6: {
      title: "Specialization",
      description: "Specialize behavior in subclasses.",
      content: <Specialization />,
    },
    7: {
      title: "The Liskov Substitution Principle",
      description: "Understand substitutability in class hierarchies.",
      content: <LiskovSubstitutionPrinciple />,
    },
    8: {
      title: "Debugging Inheritance",
      description: "Debug issues in inherited class behavior.",
      content: <DebuggingInheritance />,
    },
    9: {
      title: "Practice Exercises",
      description: "Apply Chapter 17 concepts with exercises.",
      content: <Chapter17PracticeExercises />,
    },
  },
  chapter16: {
    0: {
      title: "Creating a Point",
      description: "Create and work with Point objects.",
      content: <CreatingAPoint />,
    },
    1: {
      title: "Creating a Line",
      description: "Create a Line using two Points.",
      content: <CreatingALine />,
    },
    2: {
      title: "Equivalence and Identity",
      description: "Understand equality vs identity for objects.",
      content: <EquivalenceAndIdentity />,
    },
    3: {
      title: "Rectangles & The Deep Copy Problem",
      description: "Handle nested objects and deep copies.",
      content: <RectanglesDeepCopyProblem />,
    },
    4: {
      title: "Polymorphism",
      description: "Use polymorphism across shape types.",
      content: <Chapter16Polymorphism />,
    },
    5: {
      title: "Debugging & Glossary",
      description: "Debug object code and review key terms.",
      content: <DebuggingAndGlossary />,
    },
    6: {
      title: "Practice Exercises",
      description: "Apply Chapter 16 concepts with exercises.",
      content: <Chapter16PracticeExercises />,
    },
  },
  chapter18: {
    0: {
      title: "Defining Methods",
      description: "Define methods on classes for behavior.",
      content: <Chapter18DefiningMethods />,
    },
    1: {
      title: "Converting Functions to Methods",
      description: "Move functions into classes as methods.",
      content: <Chapter18ConvertingFunctionsToMethods />,
    },
    2: {
      title: "Static Methods",
      description: "Use static methods when no instance is needed.",
      content: <Chapter18StaticMethods />,
    },
    3: {
      title: "Comparing Time Objects",
      description: "Compare Time objects effectively.",
      content: <Chapter18ComparingTimeObjects />,
    },
    4: {
      title: "Special Methods: __str__",
      description: "Customize string output with __str__.",
      content: <Chapter18SpecialMethodsStr />,
    },
    5: {
      title: "The __init__ Method",
      description: "Initialize objects with __init__.",
      content: <Chapter18InitMethod />,
    },
    6: {
      title: "Operator Overloading",
      description: "Define behavior for operators on objects.",
      content: <Chapter18OperatorOverloading />,
    },
    7: {
      title: "Debugging: Invariants",
      description: "Use invariants to debug object state.",
      content: <Chapter18DebuggingInvariants />,
    },
    8: {
      title: "Practice Exercises",
      description: "Apply Chapter 18 concepts with exercises.",
      content: <Chapter18PracticeExercises />,
    },
  },
};

const LectureContent = ({ chapter, lecture }) => {
  const lectureIndex = parseInt(lecture);
  const content = lectureContent[chapter]?.[lectureIndex];
  const lectureTitle = chapters[chapter]?.[lectureIndex] || "Welcome";

  console.log(
    "Chapter:",
    chapter,
    "Lecture:",
    lecture,
    "Index:",
    lectureIndex,
    "Content:",
    content,
  );

  if (!content) {
    return (
      <VStack
        align="start"
        w="100%"
        h="100%"
        p={4}
        spacing={4}
        bg="gray.50"
        rounded="lg"
      >
        <Heading as="h2" size="lg" color="blue.500">
          {lectureTitle}
        </Heading>
        <Text color="gray.600">
          No content available for this lecture yet. Chapter: {chapter}, Lecture
          Index: {lectureIndex}
        </Text>
      </VStack>
    );
  }

  return (
    <VStack align="start" w="100%" h="100%" p={4} spacing={4} overflowY="auto">
      <Box w="100%">
        <Heading as="h2" size="lg" color="blue.500" mb={2}>
          {content.title}
        </Heading>
        <Text color="gray.600" fontSize="sm">
          {content.description}
        </Text>
      </Box>
      <Box
        w="100%"
        sx={{
          pre: {
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          },
          code: {
            wordBreak: "break-word",
          },
        }}
      >
        {content.content}
      </Box>
    </VStack>
  );
};

export default LectureContent;
