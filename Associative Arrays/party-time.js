function solve(arr) {
    let position = arr.indexOf('PARTY');
    let invited = arr.slice(0, position);
    let attend = arr.slice(position + 1);

    let reservationList = generateGuestList(invited);

    attend.forEach((guest) => {
        let status = checkForVip(guest)
        let correct = status ? 'vip' : 'reg'
        let currentGuest = reservationList[correct].find((g) => g.guest === guest)
        if (status && currentGuest) {
            currentGuest.isHere = true
            
        } else if (!status && currentGuest) {
            currentGuest.isHere = true
        }
    });
    let vipG = reservationList.vip.filter(guest => guest.isHere === false)
    let regG = reservationList.reg.filter(guest => guest.isHere === false)
    console.log(vipG.length + regG.length);
    vipG.concat(regG).forEach(guest => console.log(guest.guest))

    function generateGuestList(guests) {
        let list = {
            vip: [],
            reg: []
        };
        guests.forEach((guest) => {
            let guestObj = { guest, isHere: false }
            if (checkForVip(guest)) {
                list.vip.push(guestObj)
            } else {
                list.reg.push(guestObj)
            }
        });
        return list
    }
    function checkForVip(guest) {
        return !isNaN(Number(guest[0]))
    }
}
solve([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])