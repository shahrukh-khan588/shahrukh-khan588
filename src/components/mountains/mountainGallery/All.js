import React from "react"
import { makeStyles } from "@mui/styles"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import IconButton from "@mui/material/IconButton"
import StarBorderIcon from "@mui/icons-material/StarBorder"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: "100%",
    // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
}))

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function AdvancedImageList() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ImageList rowHeight={300} gap={2} className={classes.imageList}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.featured ? 2 : 1}
            rows={item.featured ? 1.3 : 1}
          >
            <img
              src={item.img}
              alt={item.title}
              sx={{ borderRadius: "10px" }}
            />
            <ImageListItemBar
              title={item.name}
              position="top"
              actionIcon={
                <IconButton
                  aria-label={`star ${item.name}`}
                  className={classes.icon}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

const itemData = [
  {
    img: "https://www.ispo.com/sites/default/files/styles/content_width_desktop/public/2020-01/000135870.webp?itok=oVOTGXEX",
    location: "hunza",
    name: "ice hockey",
    featured: true,
  },
  {
    img: "https://i1.wp.com/jagsnbrady.com/wp-content/uploads/2021/09/1-1.jpg?w=850&ssl=1",
    location: "hunza",
    name: "K-2",
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/03/30/02/57/camping-1289930_960_720.jpg",
    location: "shandur",
    name: "polo hockey",
  },
  {
    img: "https://www.travelershorizon.pk/wp-content/uploads/2017/09/unnamed.jpg",
    location: "hunza",
    name: "boating",
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/03/30/02/57/camping-1289930_960_720.jpg",
    location: "shandur",
    name: "polo hockey",
  },
  {
    img: "https://www.travelershorizon.pk/wp-content/uploads/2017/09/unnamed.jpg",
    location: "hunza",
    name: "boating",
    featured: true,
  },
]
