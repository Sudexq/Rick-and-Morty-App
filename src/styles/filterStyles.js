const filterStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    mb: 4,
    maxWidth: 400,
    margin: "auto",
    backgroundColor: "var(--bg-light)", // Renk için CSS değişkeni
    padding: 3,
    borderRadius: 5,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  textField: {
    fontSize: "1.2rem",
    "& .MuiInputBase-input": {
      fontSize: "0.9rem",
    },
    "& .MuiInputLabel-root": {
      fontSize: "0.9rem",
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      borderColor: "var(--primary-dark)",
      color: "var(--primary-dark)", // Focus olduğunda metin rengi
    },
  },
  button: {
    backgroundColor: "var(--primary)",
    color: "white",
    "&:hover": {
      backgroundColor: "var(--primary-dark)",
    },
  },
  title: {
    fontWeight: "bold",
    color: "var(--primary)",
    textAlign: "center",
  },
};

export default filterStyles;
