export default async function getMonthsRecords () {
 try {
  console.log('Inside the fetch function')
  const res = await fetch('/api/home');
  if (!res.ok) throw new Error(`Could not load results ${res.status}`);
  const records = await res.json();
  return records;
 } catch (err) {
  console.error(err);
 }
}