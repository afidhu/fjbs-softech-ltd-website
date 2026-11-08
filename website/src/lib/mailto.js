// Builds the email link for the contact form.
// The site has no server, so the visitor's own email app sends the message.
export function buildMailto({ name, contact, service, message }, [to, ...cc]) {
  const subject = `Website enquiry: ${service}`;
  const body = [
    `Name: ${name}`,
    `Phone or email: ${contact}`,
    `Service: ${service}`,
    "",
    message,
  ].join("\n");
  const copy = cc.length ? `cc=${cc.join(",")}&` : "";
  return `mailto:${to}?${copy}subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
