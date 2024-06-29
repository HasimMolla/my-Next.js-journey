import Banner from "./components/Banner";
import BookList from "./components/BookList";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <Banner />
      <BookList/>
      
    </main>
  );
}
