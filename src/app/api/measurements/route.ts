import { MeasurementsController } from "@/controllers/measurements";
import { error } from "console";

export async function GET() {
  console.log("Buscando medições...");

  try {
    const { measurements } = await MeasurementsController.findAll();

    if (!measurements) {
      throw new Error('No measurements found');
    }

    console.log(`Fetched [${measurements.length}] measurements successfully`);

    return Response.json({ measurements }, { status: 200 });
  } catch (error) {
    console.log("Error fetching measurements", error);
  }
}
