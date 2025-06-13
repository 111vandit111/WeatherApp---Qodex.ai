export const getImageByDayType = (dayType) => {

 switch (dayType) {
    case '01d':
    case '01n':
      return "https://images.unsplash.com/photo-1494187570835-b188e7f0f26e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    case '02d':
    case '02n':
    case '03d':
    case '03n':
    case '04d':
    case '04n':
    case '50d':
    case '50n':
      return "https://images.unsplash.com/photo-1490130740012-77abcad04b26?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    case '09d':
    case '09n':
    case '10d':
    case '10n':
    case '11d':
    case '11n':
      return "https://images.unsplash.com/photo-1414394825544-67fa8e8e28ea?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    case '13d':
    case '13n':
      return "https://plus.unsplash.com/premium_photo-1667579187855-63080761a96a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    default:
       return "https://images.unsplash.com/photo-1494187570835-b188e7f0f26e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  }

};