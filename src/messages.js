const messages = {
  error: "Sth bad happened!",
  warning: "Watch out",
  info: "Server load 70%",
};

const messageNames = Object.keys(messages);

export default function getMessage() {
  return messages[
    messageNames[Math.floor(Math.random() * messageNames.length)]
  ];
}
