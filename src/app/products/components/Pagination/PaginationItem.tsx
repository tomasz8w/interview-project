import { ButtonBase, ButtonProps, ListItem, Typography } from "@mui/material";

type Props = Omit<ButtonProps, "disabled"> & {
  caption: string;
  current?: boolean;
  disabled?: boolean;
};

const PaginationItem = ({ caption, current, disabled, ...props }: Props) => {
  const color = current
    ? "primary.main"
    : disabled
    ? "action.disabled"
    : "unset";

  return (
    <ListItem sx={{ p: 0 }}>
      <ButtonBase sx={{ px: 1, py: 2 }} disabled={disabled} {...props}>
        <Typography variant="body2" color={color}>
          {caption}
        </Typography>
      </ButtonBase>
    </ListItem>
  );
};

export default PaginationItem;
