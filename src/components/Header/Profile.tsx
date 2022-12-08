import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jean Duarte</Text>
          <Text color="gray.300" fontSize="small">
            duartejean2000@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Jean Duarte" />
    </Flex>
  );
}
