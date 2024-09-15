import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import routes from "@/routes/routes";
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { toast } = useToast();
  return (
    <div>
      <Button
        onClick={() =>
          toast({
            title: "Title",
            description: "Description",
          })
        }
      >
        AAAA
      </Button>
      <Link to={routes.contacts.root}>Go to contacts</Link>
    </div>
  );
};

export default Home;
