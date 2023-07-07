/**
 * 페이지 이동
 * @param currentPage
 */
function movePage(currentPage){
	//검색조건이 있을 경우에만 검색조건 추가(검색조건 유지한 채 페이지 이동)
	(searchData != null) ? getList(searchData, currentPage, menu) : getList("", currentPage, menu);
}
	
/**
 * ajax 통신으로 리스트를 조회한다.
 * @param searchParam 검색조건
 * @param currentPage 현재 페이지
 * @param type 메뉴타입
 */
function getList(searchParam, currentPage, type){
	$.ajax({
		url: "/api/" + type +"?currentPage=" + currentPage,
		type:"get",
		//IE 브라우저 사용 안한다는 가정하에 주석처리
		// cache: false,
		data: searchParam,
		success: function (data){
			//draw tbody
			drawTbody(data, type);
			//draw pagination
			// drawPagination(data.paging);
		},
		error:function(e){
		}
	});
}
// end function getList()


/****************************** tbody draw start **************************************************/
/**
 * tbody에 html을 덮어쓴다.
 * @param data
 * @param gubun
 */
function drawTbody(data, gubun) {
    //drawHtml, draw 대상 tbody, 신청자 아이디
    let htmlData, targetTbody, userId = "";
    const today = getToday();

    switch(gubun) {
        //연차
        case 'annual':
            targetTbody = "annualBody";
            // foreach start
            for (let i = 0; i < data.list.length; i++) {
				userId = data.list[i].empId;
                //휴가자 표시
                if (data.list[i].isHoliday === "Y") {
					htmlData += "<tr style='background: #FA9A44'>";
                } else {
					htmlData += "<tr>";
                }
                htmlData += "<td>";
                htmlData += data.list[i].no;
                htmlData += "</td>";
                htmlData += "<td>";
                htmlData += data.list[i].empNm;
                htmlData += "</td>";
                htmlData += "<td>" + data.list[i].annualStrDt;
                htmlData += "</td>";
                htmlData += "<td>" + data.list[i].annualGbNm;
                htmlData += "</td>";
                htmlData += "<td>" + data.list[i].useAnnualNum;
                htmlData += "</td>";
                htmlData += "<td>" + data.list[i].grantedAnnualNum;
                htmlData += "</td>";
                htmlData += "<td>" + data.list[i].useSpcAnnualNum;
                htmlData += "</td>";
                htmlData += "<td>" + data.list[i].grantedSpcAnnualNum;
                htmlData += "</td>";
                htmlData += "<td>" + data.list[i].cfrmCompGbNm;
                htmlData += "</td>";
                //연차승인자
                if (data.list[i].annualApprEmpNm != null) {
                    htmlData += "<td>" + data.list[i].annualApprEmpNm;
                } else {
                    htmlData += "<td> 자동승인";
                }
                htmlData += "</td>";

                if (data.list[i].apprDt != "년월일") {
                    htmlData += "<td>" + data.list[i].apprDt;
                } else {
                    htmlData += "<td>";
                }
                htmlData += "</td>";
                htmlData += "<td>";

                //신청사유 있을 경우
                if(data.list[i].annualReqReason != null) {
                    htmlData += "<a href='#pop01' class='pop-open' onclick='return false;'>";
                    // htmlData += "<span class='material-icons text-red' onclick='getReason("+ data.list[i].annualSno + ',' + userId + ")'>search";
                    htmlData += "<span class='material-icons text-red' onclick='getReason("+ data.list[i].annualSno + ")'>search";
                    htmlData += "</span>"
                    htmlData += "</a>";
                }
                //승인/반려 사유 있을 경우
                if (data.list[i].apprCompReason != null) {
                    htmlData += "<a href='#pop02' class='pop-open' onclick='return false;'>";
                    // htmlData += "<span class='material-icons text-blue' onclick='getReason("+ data.list[i].annualSno + ',' + userId + ")'>search";
                    // htmlData += "<span class='material-icons text-blue' onclick='getReason("+ data.list[i].annualSno + ")'>search";
                    htmlData += "<span class='material-icons text-blue' onclick='getReason("+ data.list[i].annualSno + ")'>search";
                    htmlData += "</span>"
                    htmlData += "</a>";
                }
                htmlData += "</td>";
                htmlData += "</tr>";

				$("#trId").attr("data-userid", userId);
            }
            // foreach end
        break;
		//type add..
		// case '':
		//입력 필요
		// break;

        //type add..
        // case '':
        //입력 필요
        // break;

        // default:
        // break;
    }
    //tbody에 반영
    $("#" + targetTbody + "").html(htmlData);
}
/****************************** tbody draw end ****************************************************/


/****************************** pagination draw start *********************************************/
/**
 * 페이지네이션을 그린다.
 * @param paging
 */
function drawPagination(paging) {

	let pageHtml = "";
	pageHtml += "<ul class='pagination'>";

	//first
	const first = parseInt(paging.firstPage);
	pageHtml += "<li class='paginate_button page-item first'>";

	if (paging.currentPage === paging.firstPage) {
		pageHtml += "<button class='page-link' disabled>";
	} else {
		pageHtml += "<button class='page-link' style='cursor: pointer;' onclick='movePage("+ first +")'>";
	}
	pageHtml += "<span class='hidden'>first page</span>";
	pageHtml += "</button>";
	pageHtml += "</li>"

	//prev
	const prev = parseInt(paging.currentPage) -1;
	pageHtml += "<li class='paginate_button page-item prev'>";

	if (paging.firstPage === paging.currentPage) {
		pageHtml += "<button class='page-link' disabled>";
	} else {
		pageHtml += "<button class='page-link' style='cursor: pointer;' onclick='movePage("+ prev +")'>";
	}
	pageHtml += "<span class='hidden'>prev page</span>";
	pageHtml += "</button>";
	pageHtml += "</li>";

	//① ~ ⑩
	for (let i = paging.firstPageNo; i <= paging.lastPageNo; i++) {
		pageHtml += "<li class='paginate_button page-item";
		//현재 페이지가 인덱스와 같으면 active class 추가
		if (paging.currentPage === i) {
			pageHtml += " active'>";
			pageHtml += "<button class='page-link' style='cursor: pointer;' onclick='movePage("+ i +")'>";
			pageHtml += i;
			pageHtml += "</button>";
			pageHtml += "</li>"
		} else {
			pageHtml += "'>";
			pageHtml += "<button class='page-link' style='cursor: pointer;' onclick='movePage("+ i +")'>";
			pageHtml += i;
			pageHtml += "</button>";
			pageHtml += "</li>"
		}
	}

	//next
	const next = parseInt(paging.currentPage) + 1;
	pageHtml += "<li class='paginate_button page-item next'>";

	if (paging.currentPage === paging.lastPage) {
		pageHtml += "<button class='page-link' disabled>";
	} else {
		pageHtml += "<button class='page-link' style='cursor: pointer;' onclick='movePage("+ next +")'>";
	}
	pageHtml += "<span class='hidden'>next page</span>";
	pageHtml += "</button>";
	pageHtml += "</li>"

	//last
	const last = parseInt(paging.lastPage);
	pageHtml += "<li class='paginate_button page-item last'>";

	if (paging.currentPage === paging.lastPage) {
		pageHtml += "<button class='page-link' disabled>";
	} else {
		pageHtml += "<button class='page-link' style='cursor: pointer;' onclick='movePage("+ last +")'>";
	}
	pageHtml += "<span class='hidden'>last page</span>";
	pageHtml += "</button>";
	pageHtml += "</li>"

	pageHtml += "</ul>";
	//페이지네이션 영역에 반영
	$(".tbl-paging").html(pageHtml);
}
/****************************** pagination draw end ***********************************************/

/**
 * 시작일, 종료일 사이 일수 계산(yyyymmdd 형식)
 * @param startDate
 * @param endDate
 * @returns {number}
 */
function calDiffDays(startDate, endDate) {

	let result = 1;
	$.ajax({
		type : "get",
		url : "/api/annual/use-date",
		data : {annualStrDt : startDate, annualEndDt : endDate},
		async : false,
		success: function (data){
			result = data;
		},
		error:function(e){
			console.log(e);
			alert("시작일을 입력해주세요.");
		}
	});
	return result;
}
	
/**
 * 팝업 호출
 * @param link
 * @param wid
 * @param hei
 * @param popName
 */
function openPopUp(link, wid, hei, popName) {
	// 팝업창 크기 설정
	const width = wid; // 팝업창 너비
	const height = hei; // 팝업창 높이

	// 듀얼 모니터 고려한 화면 중앙에 팝업창 띄우기
	const curX = window.screenLeft; // 모니터 왼쪽 시작점
	const curY = window.screenTop; // 모니터 위쪽 시작점

	const curWidth = document.body.clientWidth; // 모니터 너비
	const curHeight = document.body.clientHeight; // 모니터 높이

	const left = curX + (curWidth / 2) - (width / 2); // 팝업창 최종 왼쪽 간격
	const top = curY + (curHeight / 2) - (height / 2); // 팝업창 최종 위쪽 간격
	
	const options = "width=" + width + ", height=" + height + ", left=" + left + ", top=" + top;

	const popWindow = window.open(link, popName, options);
}

// 오늘 날짜 yyy-mm-dd 형태로 출력
function getToday(){
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, '0');
	const day = String(today.getDate()).padStart(2, '0');
	const currentDate = year + '-' + month + '-' + day;

	return currentDate;
}

function getTime(){
	const today = new Date();
	const hours = today.getHours(); // 시
	const minutes = today.getMinutes();  // 분
	const currentTime = hours + '-' +minutes;

	return currentTime;

}


/** 전체 사원 정보 모달 */
// 투입인원 ajax
function getEmpList(){
	$.ajax({
		url:"/api/emp-list",
		type:"get",
		success:function (data){

			drawEmpList(data);
		},
		error(){
			console.log("getEmpList 실패");
		}
	});
}

// 사원전체 정보를 그린다
function drawEmpList(data){

	let htmlData = "";

	htmlData += "<span class='chk checkbox single'>";
	htmlData += "<input type='checkbox' id='chk-all' title='Label' onClick='checkAll()'/>";
	htmlData += "<label For='chk-all' class='chk-label'>전체</label>";
	htmlData += "</span>";

	htmlData += "<div class='form-row line-box'>";
	for (let i = 0; i < data.list.length; i++) {

		htmlData += "<span class='chk checkbox'>";
		htmlData += "<input type='checkbox' name='selectedEmp' ";
		htmlData += "value=" + data.list[i].empId + " ";
		htmlData += "id=" + i + " ";
		htmlData += "data-attr1=" + data.list[i].attr1 + " ";
		htmlData += "data-empNm=" + data.list[i].empNm + " ";
		htmlData += "/>";
		htmlData += "<label for='" + i + "' class='chk-label'>" + data.list[i].empNm + "</label>";
		htmlData += "</span>";
	}
	htmlData += "</div>";

	$("#empBody").html(htmlData);
}

// 투입인원 추가 팝업 : 전체 체크/해제
function checkAll(){
	if ($('#chk-all').is(':checked')) {
		// chk-all가 체크되면, 전체가 체크됨
		$('input[name="selectedEmp"]').prop('checked', true);
	} else {
		// chk-all이 체크해제돼면,  전체 체크 해제됨
		$('input[name="selectedEmp"]').prop('checked', false);
	}
}


/**
 * form 객체 초기화
 * @param formName
 */
function formReset(formName) {
	$("#" + formName + "")[0].reset();
}







