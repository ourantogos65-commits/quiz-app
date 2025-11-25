import { BsStars } from "react-icons/bs";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Content = () => {
  return (
    <div className="flex justify-center  mt-20 h-[442px] w-[856px] bg-white p-5">
      <div className="w-[800px] flex flex-col gap-4">
        <div>
          <h1 className="flex text-2xl gap-2 items-center h-[32px]">
            <BsStars />
            Article Quiz Generator
          </h1>
          <p className="text-sm text-gray-400">
            Paste your article below to generate a summarize and quiz question.
            Your articles will saved in the sidebar for future reference.
          </p>
        </div>
        <div>
          <h1>Article Title</h1>
          <Input placeholder="Enter a title for your article..." />
        </div>
        <div>
          <h1>Article Content</h1>
          <Input
            className="h-[120px]"
            placeholder="Paste your article content here..."
          />
        </div>
        <div className="justify-end flex w-full ">
          <Button className="w-[160px] ">Generate summary</Button>
        </div>
      </div>
    </div>
  );
};
