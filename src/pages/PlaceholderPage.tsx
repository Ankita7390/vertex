import { motion } from "framer-motion";

import { Badge, Button, Card } from "@/components/ui";

interface PlaceholderPageProps {
  title: string;
  eyebrow?: string;
  description: string;
}

export function PlaceholderPage({
  title,
  eyebrow = "Vertex",
  description,
}: PlaceholderPageProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="grid w-full place-items-center"
      initial={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      <Card className="w-full max-w-2xl p-8">
        <Badge>{eyebrow}</Badge>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
          {title}
        </h1>
        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button>Primary action</Button>
          <Button variant="secondary">Secondary action</Button>
        </div>
      </Card>
    </motion.div>
  );
}
