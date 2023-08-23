import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderText = styled("h1")({
  textAlign: "center",
});

export const ParagraphHeaderText = styled("p")({
  textAlign: "center",
  fontWeight: "bold",
});

export const SpanPaperText = styled("span")({
  fontWeight: "bold",
});

export const StyledPaperContainer = styled(Paper)({
  margin: "0 10%",
  padding: "20px",
});

export const Item = styled("div")({
  borderBottom: "1px solid #00d",
});

export const ParagraphAmountBaseCurrency = styled("p")({
  fontSize: "1.2rem",
  color: "rgb(92, 102, 123)",
  fontWeight: "600",
  margin: "10px 0 0 0",
});

export const ParagraphResult = styled("p")({
  margin: "0",
  fontSize: "2.5rem",
  fontWeight: "600",
  color: "rgb(46, 60, 87)",
});
