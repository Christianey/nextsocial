import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { FaSignInAlt, FaEdit } from "react-icons/fa";

function Navbar() {
  return (
    <Flex>
      <Link href="/login">
        <a>
          <FaSignInAlt />
        </a>
      </Link>
      <Link href="/signup">
        <a>
          <FaEdit />
        </a>
      </Link>
    </Flex>
  );
}

export default Navbar;
