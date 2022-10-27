/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Grid, Typography } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";

interface ConteudoLogadoProps {
  children?: string;
}

export default function ConteudoLogado(props: ConteudoLogadoProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Grid item container xs={12}>
        <Typography fontSize={20} fontWeight="bold" py="41px" alignSelf="start">
          Welcome, First Name LasNAme
        </Typography>
        <Grid
          item
          container
          border="1px solid #DEE5EE"
          borderRadius="10px"
          bgcolor="#FFFFFF"
          textAlign="start"
          py={7}
          px={5}
        >
          <Grid
            item
            xs={12}
            pb={8}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Grid
              item
              xs={10}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              textAlign="center"
            >
              <Typography pl={2} pb={1} fontSize={32} fontWeight="bold">
                This is the headline
              </Typography>
              <Typography pl={2} fontSize={16}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                ante metus. Suspendisse potenti. Suspendisse sed maximus justo.
                Mauris euismod diam sem, et accumsan purus rhoncus at. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                eros velit, vulputate
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            xs={6}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Grid display="flex" alignItems="center" pb={5}>
              <CheckIcon sx={{ color: "green" }} />
              <Grid>
                <Typography pl={2} pb={1} fontSize={16} fontWeight="600">
                  Lorem ipsum dolor sit amet
                </Typography>
                <Typography pl={2} fontSize={16}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  diam.
                </Typography>
              </Grid>
            </Grid>

            <Grid display="flex" alignItems="center" pb={5}>
              <CheckIcon sx={{ color: "green" }} />
              <Grid>
                <Typography pl={2} pb={1} fontSize={16} fontWeight="600">
                  Lorem ipsum dolor sit amet
                </Typography>
                <Typography pl={2} fontSize={16}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  diam.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={6}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Grid display="flex" alignItems="center" pb={5}>
              <CheckIcon sx={{ color: "green" }} />
              <Grid>
                <Typography pl={2} pb={1} fontSize={16} fontWeight="600">
                  Lorem ipsum dolor sit amet
                </Typography>
                <Typography pl={2} fontSize={16}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  diam.
                </Typography>
              </Grid>
            </Grid>

            <Grid display="flex" alignItems="center" pb={5}>
              <CheckIcon sx={{ color: "green" }} />
              <Grid>
                <Typography pl={2} pb={1} fontSize={16} fontWeight="600">
                  Lorem ipsum dolor sit amet
                </Typography>
                <Typography pl={2} fontSize={16}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  diam.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
