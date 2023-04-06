import { createClient } from "contentful";
import { ItemFields } from "./types/types";

const client = createClient({
  space: "9f7rsl67dvjh"!,
  environment: "master", // defaults to 'master' if not set
  accessToken: "aF6h-6qMj0poRUFoqg-MwliMOjxodRLYptsjApmrW18"!,
});

const ul = document.getElementById("ul-list");

client
  .getEntries<ItemFields>({
    content_type: "projects",
  })
  .then((res) => {
    console.log("res", res);
    res.items.forEach((x) => {
      console.log("image", x.fields.image);
      const li = document.createElement("li");
      const a = document.createElement("a");
      const div = document.createElement("div");
      const imageWrapper = document.createElement("div");
      const img = document.createElement("img");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");
      img.src = x.fields.image.fields.file.url;
      h3.textContent = x.fields.name;
      p.textContent = x.fields.description;
      div.className = "description-wrapper";
      div.append(h3, p);
      a.href = x.fields.url;
      a.target = "_blank";
      a.append(img);
      imageWrapper.append(a);
      imageWrapper.className = "image-wrapper";
      li.append(imageWrapper, div!);
      a.append;
      li.className = "project-container";
      ul!.append(li!);
    });
  });
