import {
  Heading,
  Box,
  Input,
  Text,
  Textarea,
  Button,
  Stack,
  Flex,
  HStack,
  VStack
} from "@chakra-ui/react";
import React, { useState  } from "react";
import HighlightWithinTextarea from "react-highlight-within-textarea";
import {
  countChar,
  countCharWithoutSpace,
  countWord,
  replaceString,
  findString
} from "./utils";

export default function App() {
  const [value, setValue] = useState("");
  const [highlight, setHighlight] = useState("potato");
  const [newHighlight, setNewHighlight] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [charCountWithoutSpace, setCharCountWithoutSpace] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [replaceFrom, setReplaceFrom] = useState("");
  const [replaceTo, setReplaceTo] = useState("");

  const handleTextChange = (value) => {
    setValue(value);
    setCharCount(countChar(value));
    setCharCountWithoutSpace(countCharWithoutSpace(value));
    setWordCount(countWord(value));
  };

  const handleReplace = () => {
    const replacedValue = replaceString(replaceFrom, replaceTo, value);
    setValue(replacedValue);
  };

  const handleHighlight = () => {
    const foundString = findString(newHighlight, value);
    setHighlight(foundString);
  }  

  return (
    <>
      <Heading as="h1" size="2xl" mb={4}> Simple Text Editor </Heading>

      <VStack mb={4} alignItems="left">
        <Box
          border="1px solid"
          borderColor="gray.300"
          borderRadius="md"
          bgColor="gray.100"
          p={4}
          mb={1}
          overflow="auto">
        <Heading as="h2" size="md" mb={4}> Find </Heading>
        <HStack mb={4}>
          <Input
            placeholder="Search ..."
            value={newHighlight}
            onChange={(e) => setNewHighlight(e.target.value)}
            _focus={{ bgColor: "white" }}
            />
          <HStack>
            <Button width="20vw" bgColor="blue.500" textColor="white" _hover={{ bgColor: "blue.700", textColor: "white" }} onClick={handleHighlight}>Search</Button>
          </HStack>
        </HStack>
        </Box>
        <Box 
          border="1px solid"
          borderColor="gray.300"
          borderRadius="md"
          bgColor="gray.100"
          p={4}
          mb={4}
          overflow="auto">
        <Heading as="h2" size="md" mb={4}> Replace </Heading>
        <HStack mb={4}>
          <Input
            placeholder="From"
            value={replaceFrom}
            onChange={(e) => setReplaceFrom(e.target.value)}
            _focus={{ bgColor: "white" }}
            />
          <Input
            placeholder="To"
            value={replaceTo}
            onChange={(e) => setReplaceTo(e.target.value)}
            _focus={{ bgColor: "white" }}
             />
          <Button width="20vw" bgColor="blue.500" textColor="white" _hover={{ bgColor: "blue.700", textColor: "white" }} onClick={handleReplace}>Replace</Button>
        </HStack>
        </Box>
      </VStack>

      <Box 
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
        p={4}
        pl={9}
        height="80vh"
        mb={4}
        resize="vertical"
        overflow="auto">
          <HighlightWithinTextarea
            highlight={highlight}
            placeholder=""
            value={value}
            onChange={(value) => handleTextChange(value)}
          />
      </Box>

      <Box 
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
        bgColor="gray.100"
        p={4}
        mb={4}
        overflow="auto">
      <VStack spacing={1} mt={4} alignItems="left">
        <Text>Words: {wordCount}</Text>
        <Text>Characters: {charCount}</Text>
        <Text>Characters (without spaces): {charCountWithoutSpace}</Text>
      </VStack>
      </Box>
    </>
  );
}