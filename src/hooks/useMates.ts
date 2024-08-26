import { useState, useEffect } from "react";
import {
  fetchReceivedMateRequests,
  fetchMatesList,
  acceptMateRequest,
  rejectMateRequest,
} from "../api/mates.api";
import { IMate } from "../models/user.model";

export const useReceivedMateRequests = (user_id: number) => {
  const [receivedRequests, setReceivedRequests] = useState<IMate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const requestsData = await fetchReceivedMateRequests(user_id);
        // console.log("Received Requests:", requestsData);
        setReceivedRequests(requestsData);
      } catch (error) {
        
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [user_id]);

  return {
    receivedRequests,
    loading,
  };
};


export const useMatesList = (user_id: number) => {
  const [mates, setMates] = useState<IMate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMates = async () => {
      try {
        const matesData = await fetchMatesList(user_id);
        setMates(matesData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchMates();
  }, [user_id]);

  return {
    mates,
    loading,
    error,
  };
};

export const useAcceptMateRequest = (user_id: number) => {
  const [receivedRequests, setReceivedRequests] = useState<IMate[]>([]);

  const handleAcceptRequest = async (requestID: number) => {
    try {
      await acceptMateRequest(user_id, requestID);
      setReceivedRequests((prev) =>
        prev.filter((request) => request.user_id !== requestID)
      );
    } catch (error) {
      console.error("친구 요청을 수락하는 중 오류가 발생했습니다.", error);
    }
  };

  return {
    handleAcceptRequest,
    setReceivedRequests,
  };
};

// 친구 요청 거절 훅
export const useRejectMateRequest = (user_id: number) => {
  const [receivedRequests, setReceivedRequests] = useState<IMate[]>([]);

  const handleRejectRequest = async (requestID: number) => {
    try {
      await rejectMateRequest(user_id, requestID);
      setReceivedRequests((prev) =>
        prev.filter((request) => request.user_id !== requestID)
      );
    } catch (error) {
      console.error("친구 요청을 거절하는 중 오류가 발생했습니다.", error);
    }
  };

  return {
    handleRejectRequest,
    setReceivedRequests,
  };
};
