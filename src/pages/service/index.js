import { useRouter } from "next/router";
import Link from "next/link";

import BlogCard from "@/components/BlogCard/BlogCard";

const ServiceList = (props) => {
  const router = useRouter();
  console.log(props.data);

  const serviceData = props.data.data;

  return (
    <div>
      {serviceData.map(({ id, attributes }) => (
        <Link key={id} href={"/service/" + attributes.slug}>
          {" "}
          <BlogCard name={attributes.Name} />
        </Link>
      ))}
    </div>
  );
};
export default ServiceList;

export async function getStaticProps(context) {
  const res = await fetch(`${process.env.API_URL}/services/`);
  const data = await res.json();
  // console.log(context);
  return {
    props: { data }, // will be passed to the page component as props
  };
}
