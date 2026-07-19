import mongoose, { Schema, type Document } from "mongoose";

export interface IVisit extends Document {
  count: number;
}

const VisitSchema = new Schema<IVisit>({
  count: { type: Number, default: 0 },
});

export const Visit = mongoose.models.Visit || mongoose.model<IVisit>("Visit", VisitSchema);
