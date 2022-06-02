import React from "react";
import { Box } from "@mui/system";
import { FormControl, TextField } from "@mui/material";

const TextFieldComp = () => {
  const handleChange = () => {};

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth>
        <TextField
          onChange={handleChange}
          variant="outlined"
          label="Amount of Quetions"
          type="number"
          size="small"
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldComp;
