import React from "react";
import { useToastContext, REMOVE } from "../../store/responseMessage";
import { makeStyles } from "@mui/styles";
import { Alert, Box, Typography } from "@mui/material/";

const useStyles = makeStyles((theme) => ({
  toast: {
    position: "fixed",
    left: "10px",
    bottom: "20px",
  },
  toastContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  toastContainerItem: {
    margin: "5px 0px",
    padding: "2px",
    borderRadius: "4px",
    width: "100%",
    minHeight: "100px",
    wordWrap: "break-word",
    backgroundColor: theme.palette.success.main,
    boxShadow: "4px 4px 15px 2px rgba(black, 0.75)",
    color: theme.palette.white,
    transition: "0.2s",
    "&:focus": {
      transform: "translateY(3rem)",
    },
    "&.info": {
      backgroundColor: theme.palette.error.main,
    },
    "&.danger": {
      backgroundColor: theme.palette.error.main,
    },
  },
  toastClose: {
    cursor: "pointer",
    position: "relative",
    top: "5px",
    fontSize: "20px",
    fontWeight: 800,
  },
}));

export default function Toast({ toast }) {
  const { toastDispatch } = useToastContext();

  const classes = useStyles();

  function renderItem(content) {
    if (typeof content === "function") {
      return content();
    } else {
      return <pre>{}</pre>;
    }
  }
  return (
    <div className={classes.toast}>
      <div className={classes.toastContainer}>
        {toast.map((t) => {
          return (
            <Box>
              <Alert
                variant="filled"
                severity={t.type}
                onClose={() =>
                  toastDispatch({ type: REMOVE, payload: { id: t.id } })
                }
              >
                <Typography variant="subtitle1">{t.content.message}</Typography>
              </Alert>
            </Box>
          );
        })}
      </div>
    </div>
  );
}
