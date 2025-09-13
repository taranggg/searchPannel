import { motion } from "framer-motion";

type FlatListProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor?: (item: T, index: number) => string | number;
  className?: string;
  itemClassName?: string;
  withAnimation?: boolean;
};

function FlatList<T>({
  data,
  renderItem,
  keyExtractor,
  className,
  itemClassName,
  withAnimation = true,
}: FlatListProps<T>) {
  const getKey = (item: T, index: number) =>
    (keyExtractor ? keyExtractor(item, index) : (index as number)) as
      | string
      | number;

  return (
    <div role="list" className={className}>
      {data.map((item, index) => {
        const key = getKey(item, index);
        const content = renderItem(item, index);
        return withAnimation ? (
          <motion.div
            role="listitem"
            key={key}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className={itemClassName}
          >
            {content}
          </motion.div>
        ) : (
          <div role="listitem" key={key} className={itemClassName}>
            {content}
          </div>
        );
      })}
    </div>
  );
}

export default FlatList;
