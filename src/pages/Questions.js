import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Questions = () => {
  return (
    <Box>
      <Typography variant="h4">Questions 1</Typography>
      <Typography vmt={5}>this is the questions</Typography>
      <Box mt={2}>
        <Button variant="contained">Answer1</Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained">Answer2</Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained">Answer3</Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained">Answer4</Button>
      </Box>
      <Box mt={5}>Score: 2/6</Box>
    </Box>
  );
};

export default Questions;
