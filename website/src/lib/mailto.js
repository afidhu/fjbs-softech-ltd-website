// Builds an email link for the site's forms.
// The site has no server, so the visitor's own email app sends the message.
// fields is a list of [label, value] pairs; empty values are left out.
export function buildMailto({ subject, fields, message = "" }, [to, ...cc]) {
  const lines = fields.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`);
  const body = [...lines, "", message].join("\n");
  const copy = cc.length ? `cc=${cc.join(",")}&` : "";
  return `mailto:${to}?${copy}subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
