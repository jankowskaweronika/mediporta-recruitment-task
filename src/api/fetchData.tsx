type Tag = {
  name: string;
  count: number;
};

export const fetchData = async (): Promise<Tag[]> => {
  try {
    const response = await fetch(`https://api.stackexchange.com/2.3/tags?pagesize=10&order=desc&sort=popular&site=stackoverflow`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    const tags: Tag[] = data.items.map((item: any) => ({
      name: item.name,
      count: item.count
    }));
    return tags;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};
