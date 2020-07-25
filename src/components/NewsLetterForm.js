export default function NewsLetterForm() {
  return (
    <>
      <strong>Join the newsletter</strong>
      <form
        className=""
        action="https://tinyletter.com/geekysrm"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://tinyletter.com/geekysrm', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
      >
        <p>
          <label htmlFor="tlemail">Enter your email address</label>
        </p>
        <p>
          <input
            type="text"
            style={{ width: "140px" }}
            name="email"
            id="tlemail"
          />
        </p>
        <input type="hidden" defaultValue={1} name="embed" />
        <input type="submit" defaultValue="Subscribe" />
      </form>
    </>
  );
}
