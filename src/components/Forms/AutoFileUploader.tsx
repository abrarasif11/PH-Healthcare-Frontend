"use client";

import { CloudUpload as CloudUploadIcon } from "@mui/icons-material";
import { Box, Button, Input, SvgIconProps, SxProps } from "@mui/material";
import { ReactElement, useRef } from "react";

interface IFileUploadButton {
  name: string;
  label?: string;
  accept?: string;
  sx?: SxProps;
  icon?: ReactElement<SvgIconProps>;
  variant?: "contained" | "text";
  onFileUpload: (file: File) => void;
}

const AutoFileUploader = ({
  name,
  label,
  accept,
  sx,
  icon,
  variant = "contained",
  onFileUpload,
}: IFileUploadButton) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Box>
      <Button
        component="label"
        role={undefined}
        variant={variant}
        tabIndex={-1}
        startIcon={icon ? icon : <CloudUploadIcon />}
        sx={{ ...sx }}
      >
        {label || "Upload file"}

        <Input
          ref={inputRef}
          name={name}
          type="file"
          inputProps={{ accept }}
          style={{ display: "none" }}
          onChange={(e) => {
            const input = e.target as HTMLInputElement;

            if (!input.files || input.files.length === 0) return;

            const file = input.files[0];
            onFileUpload(file);

            // allow same file to be re-selected
            if (inputRef.current) {
              inputRef.current.value = "";
            }
          }}
        />
      </Button>
    </Box>
  );
};

export default AutoFileUploader;
