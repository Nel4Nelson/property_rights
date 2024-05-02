import { Home, Menu, Users, Rss, Handshake, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import Logo from "@/assets/Logo.svg";

const NavBar = () => {
  return (
    <>
      <header className="flex justify-between h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px]">
        <img
          className=" h-[50px] lg:hidden"
          src={Logo}
          alt="Property Rights Logo"
        />
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                to="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Home className="h-5 w-5" />
                Home
              </Link>
              <Link
                to="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
              >
                <Users className="h-4 w-4" />
                About us
              </Link>
              <Link
                to="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Rss className="h-4 w-4" />
                Blog
              </Link>
              <Link
                to="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Users className="h-5 w-5" />
                Customers
              </Link>
              <Link
                to="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Handshake className="h-4 w-4" />
                Support us
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="hidden lg:flex lg:items-center lg:justify-between w-full">
          <img className=" h-[50px]" src={Logo} alt="Property Rights Logo" />
          <nav className="flex px-2 text-sm font-medium lg:px-4">
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Users className="h-4 w-4" />
              About us
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <Rss className="h-4 w-4" />
              Blog
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Handshake className="h-4 w-4" />
              Support us
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              Contact us
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
