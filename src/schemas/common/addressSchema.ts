import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Address {
  @Prop()
  address1?: String;

  @Prop()
  address2?: String;

  @Prop()
  country: String;

  @Prop()
  state?: String;

  @Prop()
  city?: String;

  @Prop()
  zipCode?: String;
}

const addressSchema = SchemaFactory.createForClass(Address);
export default addressSchema;
