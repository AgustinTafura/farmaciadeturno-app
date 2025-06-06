import { Typography } from "@material-tailwind/react";

// const LINKS = [
//   {
//     title: "Company",
//     items: ["About Us", "Careers", "Premium Tools", "Blog"],
//   },
//   {
//     title: "Pages",
//     items: ["Login", "Register", "Add List", "Contact"],
//   },
//   {
//     title: "Legal",
//     items: ["Terms", "Privacy", "Team", "About Us"],
//   },
// ];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pb-8 pt-24">
      <div className="container mx-auto flex max-w-6xl flex-col">
        <div className="grid !w-full grid-cols-1 lg:grid-cols-3">
          {/* <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div> */}
          <div className="">
            {/* <Typography variant="h6" className="mb-3 text-left">
              Subscribe
            </Typography>
            <Typography className="!text-gray-500 font-normal mb-4 text-base">
              Get access to subscriber exclusive deals and be the first who gets
              informed about fresh sales.
            </Typography>
            <Typography variant="small" className="font-medium mb-2 text-left">
              Your Email
            </Typography> */}
            {/* <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                <Input label="Email" color="gray" />
                <Typography className="font-medium mt-3 !text-sm !text-gray-500 text-left">
                  I agree the{" "}
                  <a
                    href="#"
                    className="font-bold underline hover:text-gray-900 transition-colors"
                  >
                    Terms and Conditions{" "}
                  </a>
                </Typography>
              </div>
              <Button color="gray" className="w-full lg:w-fit" size="md">
                button
              </Button>
            </div> */}
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="mt-16 text-center font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Made by{" "}
          <a href="https://ar.linkedin.com/in/agustintafura" target="_blank">
            TA Dev
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
