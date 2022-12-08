import { Box, Stack, useBreakpointValue } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Stack
      direction={isWideVersion ? "row" : "column"}
      spacing="6"
      mt="8"
      justifyContent="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
      </Stack>
    </Stack>
  );
}
