import { redirect } from "next/navigation";

const defaultCategoryId = "01";

const Home = async () => {
  redirect(`/category/${defaultCategoryId}`);
};

export default Home;
