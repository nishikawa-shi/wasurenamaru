import { SampleModel } from "./sampleModel"

test('totalPropertyNumbers_returnTotalOfConstructorGivenNumbers', () => {
    expect(new SampleModel(1, 3).totalPropertyNumbers()).toBe(4)
})
