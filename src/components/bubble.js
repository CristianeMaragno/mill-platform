import React, {useEffect} from "react";

export const CreateChatBot = () => {
  useEffect(() => {
    const typebotInitScript = document.createElement("script");
    typebotInitScript.type = "module";
    typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.1/dist/web.js'
      Typebot.initBubble({
        typebot: "my-typebot-mg8w5tz",
        theme: {
          button: { backgroundColor: "#479AC2", iconColor: "#FFFFFF" },
          previewMessage: { backgroundColor: "white", textColor: "black" },
        },
      });
    `;
    document.body.append(typebotInitScript);
  }, [])
}
