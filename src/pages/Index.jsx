import React, { useState } from "react";
import { Box, Heading, Text, VStack, Grid, FormControl, FormLabel, Input, Textarea, Button, useColorModeValue } from "@chakra-ui/react";

const Index = () => {
  const [trades, setTrades] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [entry, setEntry] = useState("");
  const [exit, setExit] = useState("");
  const [pnl, setPnl] = useState("");
  const [notes, setNotes] = useState("");

  const addTrade = () => {
    const newTrade = {
      symbol,
      entry,
      exit,
      pnl,
      notes,
    };
    setTrades([...trades, newTrade]);
    setSymbol("");
    setEntry("");
    setExit("");
    setPnl("");
    setNotes("");
  };

  return (
    <Box bg={useColorModeValue("gray.800", "gray.900")} minH="100vh" py={10}>
      <VStack spacing={8} align="stretch" mx="auto" maxW="3xl">
        <Heading as="h1" size="2xl" color="cyan.400" textAlign="center">
          Trading Journal
        </Heading>

        <Grid templateColumns="repeat(5, 1fr)" gap={4} px={4} color="white">
          <Text fontWeight="bold">Symbol</Text>
          <Text fontWeight="bold">Entry</Text>
          <Text fontWeight="bold">Exit</Text>
          <Text fontWeight="bold">P&L</Text>
          <Text fontWeight="bold">Notes</Text>
          {trades.map((trade, index) => (
            <React.Fragment key={index}>
              <Text>{trade.symbol}</Text>
              <Text>{trade.entry}</Text>
              <Text>{trade.exit}</Text>
              <Text>{trade.pnl}</Text>
              <Text>{trade.notes}</Text>
            </React.Fragment>
          ))}
        </Grid>

        <VStack
          as="form"
          spacing={4}
          px={4}
          onSubmit={(e) => {
            e.preventDefault();
            addTrade();
          }}
        >
          <FormControl>
            <FormLabel color="cyan.100">Symbol</FormLabel>
            <Input value={symbol} onChange={(e) => setSymbol(e.target.value)} bg="gray.700" color="white" />
          </FormControl>
          <FormControl>
            <FormLabel color="cyan.100">Entry</FormLabel>
            <Input value={entry} onChange={(e) => setEntry(e.target.value)} bg="gray.700" color="white" />
          </FormControl>
          <FormControl>
            <FormLabel color="cyan.100">Exit</FormLabel>
            <Input value={exit} onChange={(e) => setExit(e.target.value)} bg="gray.700" color="white" />
          </FormControl>
          <FormControl>
            <FormLabel color="cyan.100">P&L</FormLabel>
            <Input value={pnl} onChange={(e) => setPnl(e.target.value)} bg="gray.700" color="white" />
          </FormControl>
          <FormControl>
            <FormLabel color="cyan.100">Notes</FormLabel>
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} bg="gray.700" color="white" />
          </FormControl>
          <Button type="submit" colorScheme="cyan">
            Add Trade
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;
