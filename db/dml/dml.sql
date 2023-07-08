INSERT INTO MORNING_ROUTINE_INFO
            (
                MORNING_ROUTINE_SNO
              , RECORD_DATE
              , BEDTIME
              , SCHEDULED_WAKE_UP_TIME
              , WAKE_UP_TIME
              , WALK_YN
              , SUCCESS_FAILURE_YN
              , NOTE
              , GRATITUDE_JOURNAL

            )
            VALUES
            (
                MORNING_ROUTINE_SNO_SEQ.NEXTVAL
              , '20230709'
              , TO_DATE('20230623 22:10', 'YYYYMMDD HH24:MI:SS')
              , TO_DATE('20230621 04:00', 'YYYYMMDD HH24:MI:SS')
              , TO_DATE('20230621 04:00', 'YYYYMMDD HH24:MI:SS')
              , 'Y'
              , 'Y'
              , '입력'
              , '입력'
            )
;

COMMIT;

