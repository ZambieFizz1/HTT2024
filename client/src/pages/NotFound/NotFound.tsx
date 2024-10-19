  import { Central as Layout } from "@/layouts";
  import "./NotFound.style.scss";

  function NotFound() {
    return (
      <div
        style={{
          backgroundImage: 'url("/Hog_Rider_Puppet.webp")',
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Layout title={"Hog Not Found"}>
          <h1>WHAT DID YOU DO?!?!?!?!? YOU SCREWED IT UP! ERROR! ERROR! HOG RIDDDEEEERRR!!!</h1>
        </Layout>
      </div>
    );
  }

  export default NotFound;