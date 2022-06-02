import { Typography, Button, CircularProgress } from "@mui/material";
import SelectField from "../components/SelectField";
import { Box } from "@mui/system";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography vsriant="h6" mt={20} color="red">
        Something is wrong
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Typography variant="h2" fontWeight={"bold"}>
        Quiz App
      </Typography>
      <form onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label="category" />
        <SelectField options={difficultyOptions} label="difficulty" />
        <SelectField options={typeOptions} label="type" />
        <TextFieldComp />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            Ready
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Settings;
