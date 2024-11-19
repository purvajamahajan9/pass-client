export function generateSecurePassword(input) {
  const desiredLength = input.length + 10;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  // Trim the input string if it's longer than the desired length
  let base =
    input.length > desiredLength ? input.slice(0, desiredLength) : input;

  // Generate random characters to fill the rest of the password length
  while (base.length < desiredLength) {
    const randomChar = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    base += randomChar;
  }

  return base;
}

export const generateApiUrl = (slug, methodSlug) => {
  return process.env.NEXT_PUBLIC_SERVER_URL + "/api/" + slug + methodSlug;
};
