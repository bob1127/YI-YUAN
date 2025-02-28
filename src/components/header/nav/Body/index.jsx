import { motion } from "framer-motion";
import { TransitionLink } from "../../../utils/TransitionLink"; // 使用新的 TransitionLink
import styles from "./style.module.scss";
import Link from "next/link";
export default function Body({ links, selectedLink, setSelectedLink }) {
  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          key={char + i}
          className="inline-block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: i * 0.02 } }}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <TransitionLink key={`l_${index}`} href={href}>
            <p
              onMouseOver={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() => setSelectedLink({ isActive: false, index })}
              className={
                selectedLink.isActive && selectedLink.index !== index
                  ? "opacity-50 transition-opacity duration-300"
                  : "opacity-100"
              }
            >
              {getChars(title)}
            </p>
          </TransitionLink>
        );
      })}
    </div>
  );
}
