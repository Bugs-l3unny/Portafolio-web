/** Details that read the same in every language. */
export const person = {
  firstName: "Alexander",
  lastName: "Iquise",
  email: "alexanderiquise9@gmail.com",
  whatsappDisplay: "+51 994 984 495",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/alexander-iquise-64b560376/" },
    { label: "GitHub", href: "https://github.com/Bugs-l3unny" },
  ],
} as const;

/** WhatsApp chat link with a first message already written. */
export function whatsappLink(message: string) {
  return `https://wa.me/51994984495?text=${encodeURIComponent(message)}`;
}
