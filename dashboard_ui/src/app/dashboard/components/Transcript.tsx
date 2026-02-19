interface transcript {
  sender: "User" | "Interviewer";
  text: string;
}

const mockTranscript: transcript[] = [
  {
    sender: "User",
    text: "This the sender speaking",
  },
  {
    sender: "Interviewer",
    text: "This the AI speaking",
  },
  {
    sender: "User",
    text: "This the sender speaking Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto saepe sint harum expedita, minus ipsum sunt. Ullam facilis, eum alias, provident, corporis rem quisquam hic iusto et sed numquam!",
  },
  {
    sender: "Interviewer",
    text: "This the AI speaking Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto saepe sint harum expedita, minus ipsum sunt. Ullam facilis, eum alias, provident, corporis rem quisquam hic iusto et sed numquam!",
  },
  {
    sender: "User",
    text: "This the sender speaking Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto saepe sint harum expedita, minus ipsum sunt. Ullam facilis, eum alias, provident, corporis rem quisquam hic iusto et sed numquam!",
  },
  {
    sender: "Interviewer",
    text: "This the AI speaking Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto saepe sint harum expedita, minus ipsum sunt. Ullam facilis, eum alias, provident, corporis rem quisquam hic iusto et sed numquam!",
  },
  {
    sender: "User",
    text: "This the sender speaking Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto saepe sint harum expedita, minus ipsum sunt. Ullam facilis, eum alias, provident, corporis rem quisquam hic iusto et sed numquam!",
  },
  {
    sender: "Interviewer",
    text: "This the AI speaking Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto saepe sint harum expedita, minus ipsum sunt. Ullam facilis, eum alias, provident, corporis rem quisquam hic iusto et sed numquam!",
  },
  {
    sender: "User",
    text: "This the sender speaking Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto saepe sint harum expedita, minus ipsum sunt. Ullam facilis, eum alias, provident, corporis rem quisquam hic iusto et sed numquam!",
  },
  {
    sender: "Interviewer",
    text: "This the AI speaking Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto saepe sint harum expedita, minus ipsum sunt. Ullam facilis, eum alias, provident, corporis rem quisquam hic iusto et sed numquam!",
  },
];

export default function Transcript() {
  const messages = mockTranscript;

  return (
    <div className="flex flex-col h-[calc(100vh-100px)] w-100!">
      <div className="flex items-center gap-2 text-sm border-b border-zinc-700 w-full! p-2 h-10!">
        <p className="font-semibold">Transcript</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div key={index}>
            <span
              className={`flex text-sm font-medium ${
                msg.sender === "User" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender}
            </span>
            <div
              className={`mt-0.5 flex ${
                msg.sender === "User" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[90%] rounded-lg p-2 text-xs ${
                  msg.sender === "User"
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-800 text-zinc-100"
                }`}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
