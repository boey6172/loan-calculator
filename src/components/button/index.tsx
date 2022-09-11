import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({text,onClick}) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={onClick}
        variant="contained">
        {text}
      </Button>
    </Stack>
  );
}