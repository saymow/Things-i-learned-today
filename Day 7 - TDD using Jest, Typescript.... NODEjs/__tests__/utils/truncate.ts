import connection from "../../src/database/connections";

const ClearDB = async () => {
	let tables = ["users"]
	
	async function truncate() {
		tables.map(async (table) => {
			 await connection.raw(`DELETE FROM ${table};`);
		})
	};
	
	return truncate();
}

export default ClearDB;