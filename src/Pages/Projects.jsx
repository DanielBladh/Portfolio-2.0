import { Container, Typography, Grid, Box } from "@mui/material";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200",
      link: "#",
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200",
      link: "#",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "blue"}}>
      <Typography variant="h5">Portfolio</Typography>
      <Typography variant="h4">My projects are under development</Typography>
      <Grid
        container
        spacing={5}
        sx={{
          display: "grid",
          gridGap: "3rem",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto auto",
          height: "auto",
          width: "100%",
        }}
      >
        {projects.map((project, index) => (
          <Grid
            item
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "30rem",
              padding: "2rem",
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              borderRadius: "10px"
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#f5f5f5",
                borderRadius: "1rem",
                overflow: "hidden",
                width: "50%",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body1">{project.description}</Typography>
              </Box>
              <Box sx={{ marginTop: "1rem" }}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project
                </a>
              </Box>            
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
