// Factory function
function uchburchak (a, b, c) {
    const result = {}

    result.tomon1 = a;    
    result.tomon2 = b;    
    result.tomon3 = c;
    
    result.printPerimetr = () => {
        console.log(result.tomon1 + result.tomon2 + result.tomon3)
    }
    return result
}
const u1 = uchburchak(10, 12, 14)
const u2 = uchburchak(14, 15, 17)

u1.printPerimetr()
u2.printPerimetr()