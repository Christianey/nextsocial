import Link from "next/link";
import { useRouter } from "next/router";
import { FaSignInAlt, FaEdit } from "react-icons/fa";
import { IconContext } from "react-icons";

function Navbar() {
  return (
    <div>
      <Link href="/login">
        <FaSignInAlt />
      </Link>
      <Link href="/signup">
        <FaEdit  />
      </Link>
    </div>
  );
}

export default Navbar;
